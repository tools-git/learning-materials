##git命令行基础语法
* pwd
	- 作用:输出当前命令对应的路径

* cd
	- 作用:切换到指定的路径
	- 语法:cd 路径,这里的路径可以是相对路径也可以是绝对路径(以盘符开始写的路径)
	
* ls
	- 作用:查看当前路径中有哪些文件和文件夹
	- 语法:ls查看当前路径中有哪些文件和文件夹,查看不了隐藏的文件
		  ls -a 查看当前路径中有哪些文件和文件夹,可以查看隐藏文件
		  
* mkdir
	- 作用:新建文件夹
	- 语法:mkdir 新的文件夹路径,根据输入的路径创建一个新的文件夹
	
* touch
	- 作用:新建一个新的文件
	- 语法:touch 新的文件路径,根据输入的路径创建一个新的文件
	
* cat
	- 作用:查看文件内容,会在命令行窗口中输出文件的全部内容
	- 语法:cat 文件名
	
* less
	- 作用:与cat命令类似,不过如果文件过长,只会显示一部分,空格键或者方向键查看其他内容,
	       在查看文件内容的过程中,如果想继续使用其他命令,需要按下Q键,退出当前状态
		   
* rm
	- 作用:删除指定的文件和文件夹
	- 语法:rm 文件路径 删除指定文件
		   rm -rf 文件夹路径 删除指定文件夹以及文件夹内容
		  
* clear
	- 作用:清屏
		   

## git仓库使用过程:
1. 配置自己的用户名和邮箱
	- `git config --global user.name "用户名"`
	- `git config --global user.email "用户的邮箱"`
	
2. 初始化仓库
	- 创建新的目录 `mkdir newFile`
	- 进入目录 `cd newFile`
	- 初始化仓库 `git init`  目录中会生成名为.git的隐藏文件夹,说明仓库创建成功
	
3. 文件备份
	- 将文件添加到暂存区: `git add 文件名`   
      将所有文件添加到暂存区: `git add -A`
	- 将暂存区所有文件提交到仓库: `git commit -m "提交说明"`
	- 显示仓库当前状态: `git status`
	
4. 其他操作
	- 查看文件差异: `git diff 文件名`
	- 显示提交日志: `git log`
	- 一行一行显示提交日志: `git log --oneline`
	
5. 回退操作
	- 回退到上一个版本: `git reset --hard ` HEAD^ 有多少个^就回退上多少个版本
	- 回退到commitid的版本: `git reset --hard commitid`
	- 查看所有提交以及版本回退记录: `git reflog`
	- 丢弃工作区的修改,一键还原最新版本: `git checkout --文件名`
	- 撤销暂存区的修改,重回工作区: `git reset HEAD 文件名`
	
6. 关联远程仓库
	- 创建SSH Key: `ssh-keygen -t rsa -C "邮箱"`
	- 添加远程库在github上: `git remote add origin git@github.com:tools-git/仓库名.git`
	- 第一次推送本地库的所有内容到远程库: `git push -u origin master`
	- 以后提交到远程库: `git push origin master`
	- 把远程库克隆到本地库: `git clone git@github.com:tools-git/仓库名.git`
	- 以后从远程库下载仓库: `git pull origin master`
	
7. 分支管理
	- 在master下创建分支: `git branch 分支名`  (master为主分支,只是创建了新的指针)
	- 切换分支: `git checkout 分支名`
	- 创建并切换分支:  `git checkout -b 分支名`
	- 查看当前所有分支:  `git branch`  (列出所有分支,并在当前分支前标*号)
	- 分支合并: `git merge 分支名`	(在master下输入命令,将分支合并到master)
	- 删除分支: `git branch -d 分支名`

8. 解决冲突
	- 当分支合并时,分支不能完全包含master主分支时,会出现合并冲突,需要手动解决冲突
	- git用<<<<<<<,=======,>>>>>>>标记出不同分支的内容,手动修改再保存
	- 查看分支合并图: `git log--graph`

9. 解决bug
	- 保存现场: `git stash`
	- 修复bug:从master创建临时分支,修改bug之后提交,合并,删除临时分支
	- 查看工作现场: `git stash list`
	- 恢复现场方法一: `git stash apply` 之后 `git stash drop` 来删除stash现场
	- 恢复现场方法二: `git stash pop`
	- 恢复指定stash: `git stash apply stas@{0}`

10. Feature分支
	- 添加新功能时,你不希望一些实验性质的代码搞乱主分支,所以新建feature分支
	- 一个没有合并过的分支需要强行删除: `git branch -D 分支名`

11. 多人协作
	- 查看远程库的信息: `git remote`
	- 显示更详细的信息: `git remote -v` (只会显示可以抓取和推送的远程库的地址)
	- 首先试图用 `git push origin branch-name` 推送自己的修改
	- 如果推送失败,则因为远程分支更新了,需要先用 `git pull` 试图合并
	- 如果合并有冲突,则解决冲突,再本地提交
	- 没有冲突或者解决冲突后,再用 `git push origin branch-name` 推送
	- 如果git pull提示 'no tracking information',说明本地分支和远程分支链接关系没有创建
	  使用命令 `git branch --set-upstream 本地分支名 远程库origin/远程分支名`

12. 标签管理
	- 切换到需要打标签的分支上,创建标签: `git tag v1.0`
	- 查看所有标签: `git tag`
	- 默认标签是打在最新提交的commit上
	- 在对应的commitid上打标签: `git tag v1.0 commitid`
	- 查看标签信息: `git show v1.0`
	- 创建带有说明的标签,用-a指定标签名,-m指定说明文字: `git tag -a v0.1 -m "说明文字" commitid`
	- 删除标签: `git tag -d v0.1`
	- 推送某个标签到远程: `git push origin v1.0`
	