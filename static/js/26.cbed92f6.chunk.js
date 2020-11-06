(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[26],{187:function(n,t){n.exports='#### \u5e38\u7528\u7684 git \u547d\u4ee4\n\n- git \u521d\u59cb\u5316 `git init`\n\n- \u914d\u7f6e\u7528\u6237\u540d `git config --global user.name "xxx"`\n\n- \u914d\u7f6e\u90ae\u4ef6 `git config --global user.email "xxx@xxx.com"`\n\n- git add . \u628a\u6240\u6709\u53d8\u5316\u63d0\u5230\u6682\u5b58\u533a git add xxx \u628a\u5236\u5b9a\u6587\u4ef6\u63d0\u5230\u6682\u5b58\u533a `git add`\n\n- \u67e5\u770b\u5f53\u524d\u6587\u4ef6\u72b6\u6001 `git status`\n\n- \u63d0\u4ea4\u66f4\u65b0 `git commit -m ""`\n\n- \u5c06add\u548ccommit\u5408\u4e3a\u4e00\u6b65, \u4f46\u53ea\u80fdcover\u5230\u5df2\u88abtrack\u7684\u6587\u4ef6 `git commit -am \'xxx\'`\n\n- \u663e\u793a\u67d0\u4e2a\u63d0\u4ea4\u7684\u8be6\u7ec6\u5185\u5bb9 `git show commit_id`\n\n- \u67e5\u770bcommit\u65e5\u5fd7 `git log`\n\n- \u56de\u9000\u5230\u67d0\u4e2acommit `git reset --hard commit_id`\n\n- \u8fdb\u5165\u5230\u67d0\u4e2acommit `git revert commit_id`\n\n- \u67e5\u770b\u672c\u5730\u5173\u8054\u7684\u8fdc\u7a0b\u4ed3\u5e93 `git remote -v`\n\n- \u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u540d\u5b57\u4e3axxx `git remote add xxx \u5730\u5740`\n\n- \u4fee\u6539\u8fdc\u7a0b\u4ed3\u5e93\u7684\u540d\u5b57 `git remote rename oldname newname`\n\n- \u5220\u9664\u540d\u5b57\u4e3aname\u7684\u8fdc\u7a0b\u4ed3\u5e93\u7684\u5173\u8054 `git remote rm name`\n\n- \u62c9\u53d6\u540d\u5b57\u4e3aname\u7684\u8fdc\u7a0b\u4ed3\u5e93\u7684branch\u5206\u652f `git pull name branch`\n\n- \u63a8\u9001\u540d\u5b57\u4e3aname\u7684\u8fdc\u7a0b\u4ed3\u5e93\u7684branch\u5206\u652f `git push name branch`\n\n- \u66f4\u65b0\u8fdc\u7a0b\u5206\u652f\u5217\u8868 `git remote update origin -p`\n\n- \u65b0\u5efa\u5e76\u8fdb\u5165\u4e00\u4e2a\u540d\u5b57\u4e3abranch\u7684\u5206\u652f \u53ef\u9009\u53c2\u6570\u6307\u5728\u67d0\u4e2a\u5206\u652f\u57fa\u7840\u4e0a\u65b0\u5efa `git checkout -b branch [remote/master]`\n\n- \u5207\u5230\u540d\u5b57\u4e3abranch\u7684\u5206\u652f `git checkout branch`\n\n- \u5220\u9664\u540d\u5b57\u4e3abranch\u7684\u5206\u652f `git branch -D branch`\n\n- \u67e5\u770b\u6240\u6709\u5206\u652f \u5305\u62ec\u672c\u5730\u548c\u8fdc\u7a0b `git branch -a`\n\n- \u514b\u9686\u9879\u76ee\u5230\u672c\u5730 `git clone \u5730\u5740`\n\n- \u5c06\u83b7\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u66f4\u65b0\u53d6\u56de\u672c\u5730\uff0c\u53d6\u56de\u7684\u4ee3\u7801\u5bf9\u672c\u5730\u7684\u5f00\u53d1\u4ee3\u7801\u6ca1\u6709\u5f71\u54cd\uff0c\u65e0\u53c2\u6570\u65f6\u9ed8\u8ba4\u53d6\u6240\u6709`git fetch [name] [branch]`\n\n- \u628abranch\u5206\u652f\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f `git merge branch`\n\n- \u5220\u9664\u540d\u5b57\u4e3aname\u7684\u8fdc\u7a0b\u7684branch\u5206\u652f `git push name :branch`\n\n  `git rebase -i HEAD~x` `git rebase -i commi_id` (commi_id\u4e0d\u53c2\u4e0e\u5408\u5e76\u7684) \u5408\u5e76\u591a\u4e2acommit, pick\u6539\u4e3as, \u5982\u6709\u51b2\u7a81\uff0c\u89e3\u51b3\u4ee5\u540e\u7ee7\u7eed `git add .` `git rebase --continue` \u53d6\u6d88\u5408\u5e76 `git rebase --abort`\n\n- \u589e\u52a0\u540d\u5b57\u4e3aname\u7684tag, commit_id\u5236\u5b9acommit\u5904\u6253tag `git tag name [commit_id]`\n\n- \u67e5\u770b\u6240\u6709tag\uff0c\u6309\u5b57\u6bcd\u6392\u5e8f `git tag`\n\n- \u5220\u9664\u540d\u5b57\u4e3aname\u7684tag `git tag -d name`\n\n- \u628a\u540d\u5b57\u4e3atagname\u7684tag\u63a8\u5230\u8fdc\u7a0b `git push origin tagname`\n\n- \u628a\u6240\u6709tag\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93 `git push --tags`\n\n- \u5220\u9664\u8fdc\u7a0btag `git push origin :refs/tags/<tagname>`\n\n- `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"` \u65b0\u751f\u6210 ssh key\n'}}]);