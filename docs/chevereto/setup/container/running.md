# 运行

## 持久层

### 资产存储

::: tip 本地资产存储
要使用本地存储，需要在应用程序可见的路径中安装适当的卷。
:::

对于资产存储，您可以使用任何受支持的 [外部存储](../../features/integrations/external-storage.md) API。这需要配置传递[资产环境变量](../system/environment.md#资产变量)。

### 会话

对于持久会话，您可以通过配置 [会话环境变量](../system/environment.md#会话变量) 变量来使用 Redis。

### 数据库

对于数据库，您可以为持久性创建一个卷，或通过网络使用服务器。如果您手动提供数据库，您将需要创建其用户绑定：

```sh
docker exec chv-mariadb mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

### 用户上传存储
  
这个持久层可以在应用程序[仪表板面板](../../settings/external-storage.md)中配置。

## 撰写

::: tip
检查 [Environment](../system/environment.md) 以获取可以在 Docker 命令中传递的 `-e` 选项。
:::

在以下示例中，卷用于所有数据持久性。使用的图像是 [httpd-php](https://github.com/chevereto/container-builder/blob/3.20/httpd-php.Dockerfile)，其中包含 Apache HTTP Web 服务器。

```yaml
version: "3"

services:
  chv-database:
    image: mariadb:focal
    networks:
      - chv-network
    volumes:
      - chv-data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: chevereto
      MYSQL_USER: chevereto
      MYSQL_PASSWORD: user_database_password

  chv-build:
    image: owner/image:httpd-php
    networks:
      - chv-network
    volumes:
      - chv-storage:/var/www/html/images/
      - chv-assets:/var/www/html/_assets/
    ports:
      - 8080:80
    restart: always
    environment:
      CHEVERETO_DB_HOST: chv-database
      CHEVERETO_DB_USER: chevereto
      CHEVERETO_DB_PASS: user_database_password
      CHEVERETO_DB_PORT: 3306
      CHEVERETO_DB_NAME: chevereto
      CHEVERETO_HTTPS: 0
      CHEVERETO_ASSET_STORAGE_TYPE: local
      CHEVERETO_ASSET_STORAGE_URL: http://localhost:8080/_assets/
      CHEVERETO_ASSET_STORAGE_BUCKET: /var/www/html/_assets/

volumes:
  chv-data:
  chv-assets:
  chv-storage:

networks:
  chv-network:
```

**注意** `CHEVERETO_ASSET_STORAGE` 映射到安装的卷 `chv-assets` 和相同的 URL。这可以映射到任何支持的 [外部存储](../../features/integrations/external-storage.md) API：

```yaml
  chv-build:
    image: owner/image:httpd-php
    networks:
      - chv-network
    ports:
      - 8080:80
    restart: always
    environment:
      CHEVERETO_DB_HOST: chv-database
      CHEVERETO_DB_USER: chevereto
      CHEVERETO_DB_PASS: user_database_password
      CHEVERETO_DB_PORT: 3306
      CHEVERETO_DB_NAME: chevereto
      CHEVERETO_HTTPS: 0
      CHEVERETO_ASSET_STORAGE_NAME: assets
      CHEVERETO_ASSET_STORAGE_TYPE: s3
      CHEVERETO_ASSET_STORAGE_KEY:  key
      CHEVERETO_ASSET_STORAGE_SECRET: secret
      CHEVERETO_ASSET_STORAGE_BUCKET: bucket-name
      CHEVERETO_ASSET_STORAGE_URL: https://s3-us-west-1.amazonaws.com/bucket-name/
      CHEVERETO_ASSET_STORAGE_REGION: s3-us-west-1
```

## 首轮

请参阅[第一步](../../manual/first-steps/README.md) 说明。
