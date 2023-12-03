如果你在提交代码时没有使用相同的changeId，那么会生成一个新的commit。在这种情况下，你可以尝试以下步骤来合并你的开发代码到上次的commit：

确保你当前位于开发分支上。可以使用以下命令来切换到开发分支（假设为develop）：

git checkout develop
确认你的开发代码已经准备好提交。使用以下命令来查看你的本地改动：

git status
这将显示你的修改文件列表。

将你的开发代码添加到暂存区。可以使用以下命令将所有修改的文件添加到暂存区：

git add .
如果你只想添加某个特定的文件，可以使用单个文件名替代.。

提交你的开发代码。使用以下命令提交你的代码，并附上合适的提交信息：

git commit --fixup <commit-hash>
其中，<commit-hash>是你想要合并的上次commit的哈希值。这将创建一个新的commit，其中包含了你的开发代码，并通过fixup标记与上次commit相关联。

运行git的交互式rebase命令。使用以下命令进行交互式rebase：

git rebase -i HEAD~n
这里的n是你想要合并的commit数量，可以根据需要进行调整。此命令将打开一个编辑器，显示你的commit历史。

在编辑器中，找到之前创建的fixup commit行，并将其移动到上次commit的下方。保存并关闭编辑器，完成rebase。

如果rebase期间出现冲突，需要解决冲突并继续rebase。使用以下命令来解决冲突：

git add <conflicted-file>
git rebase --continue
推送代码到远程仓库。如果你之前没有推送过上次的commit，你需要使用--force选项来覆盖远程仓库的历史记录：

git push --force
请确保你了解使用--force选项可能导致的影响。

通过这些步骤，你的开发代码将会合并到上一次的commit中，并且你可以将更新后的代码推送到远程仓库。请记住，在使用--force选项时要小心，确保你的行为不会对其他人的开发造成不便或数据丢失。