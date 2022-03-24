# 主题

## 主题覆盖

主题覆盖通过检测替换给定主题文件的文件覆盖来工作，因此系统将使用覆盖而不是默认文件。覆盖放置在`app/themes/Peafowl/overrides`。例如，假设您要替换`app/themes/Peafowl/views/image.php`，您只需将文件复制到`app/themes/Peafowl/overrides/views/image.php`，系统现在将使用覆盖而不是默认文件。

## 自定义钩子

自定义钩子允许在主题的指定区域或部分添加或编辑代码。默认主题包括一个自定义 hooks 文件夹，您可以在其中添加自己的内容，并填充了大量示例文件。例如，要自定义共享按钮，请执行以下步骤：

- 转到主题自定义钩子文件夹`app/themes/Peafowl/custom_hooks/`
- 复制一份`share_links.sample.php`(在此副本中进行所有需要的编辑)
- 将您的工作副本重命名为`share_links.php`

Chevereto 将检测您的覆盖并将此文件加载到主题中。

## 克隆默认主题

如果您需要更多自定义，您应该克隆默认的“Peafowl”主题并在这个新主题中完成您的工作。克隆默认主题：

- 复制`app/themes/Peafowl/` 并粘贴到同一目录中
- 将您的新主题命名为您想要的任何名称(无空格)

跟踪默认主题更改的最佳方法是在您的计算机中创建一个本地 git 存储库。使用最新的 Chevereto 版本创建一个本地 git 存储库，并在每次要合并代码时提交，这样就能够逐行准确地看到所有更改。
