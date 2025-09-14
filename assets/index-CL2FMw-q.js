import{d as j,r as t,c as v,e as o,a as n,f as u,g as s,o as w}from"./index-cbyMBLm8.js";const S={class:"linux-deploy"},b={class:"list-style-none"},D={class:"list-style-none"},k=j({__name:"index",setup(R){const d=t(`
# 假设你的 jar 在 /opt/myapp/myapp.jar
sudo chown ijunfu:ijunfu /opt/myapp/myapp.jar
sudo chmod 755 /opt/myapp/myapp.jar

# 设置工作目录权限
sudo chown -R ijunfu:ijunfu /opt/myapp/
`),a=t(`
sudo mkdir -p /var/log/myapp
sudo chown ijunfu:ijunfu /var/log/myapp
`),m=t(`
[Unit]
Description=My Spring Boot Application
After=network.target

[Service]
User=ijunfu
Group=ijunfu

Type=simple
ExecStart=/usr/bin/java -jar /opt/myapp/myapp.jar
WorkingDirectory=/opt/myapp
Restart=always
RestartSec=10

StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
`),g=t(`
# 查看用户
id ijunfu

# 查看组
getent group ijunfu

# 或查看 /etc/passwd 和 /etc/group
grep ijunfu /etc/passwd
grep ijunfu /etc/group
`),y=t(`
[Service]
DynamicUser=yes
StateDirectory=myapp      # 自动创建 /var/lib/myapp 并赋权
LogsDirectory=myapp       # 自动创建 /var/log/myapp 并赋权
CacheDirectory=myapp
`);return(x,e)=>{const c=u("FuCode"),i=u("FuLineCode"),f=u("FuQuote"),l=u("fu-code"),r=u("fu-line-code"),p=u("fu-quote");return w(),v("div",S,[e[8]||(e[8]=o("h1",{class:"title-size"},"Linux部署",-1)),e[9]||(e[9]=o("h2",{class:"subtitle-size"},"一、创建用户",-1)),o("dl",null,[e[6]||(e[6]=o("dt",null,"创建系统用户（无登录权限，无HOME目录）",-1)),o("dd",null,[n(c,{language:"shell",code:"sudo adduser --system --no-create-home --group ijunfu"})]),o("dd",null,[o("ul",b,[o("li",null,[n(i,{code:"--system"}),e[0]||(e[0]=s(": 创建系统用户（UID通常小于1000）",-1))]),o("li",null,[n(i,{code:"--no-create-home"}),e[1]||(e[1]=s(": 不创建HOME目录",-1))]),o("li",null,[n(i,{code:"--group"}),e[2]||(e[2]=s(": 创建同名的用户组",-1))])])]),o("dd",null,[n(f,{content:"这是最推荐的方式，专用于运行服务，安全且简洁。"})]),e[7]||(e[7]=o("dt",null,"手动创建用户",-1)),o("dd",null,[n(l,{language:"shell",code:"suo groupadd weiGroup"}),n(l,{language:"shell",code:"suo useradd -r -s /usr/sbin/nologin -g weiGroup wei"})]),o("dd",null,[o("ul",D,[o("li",null,[n(r,{code:"-r"}),e[3]||(e[3]=s(": 创建系统用户 ",-1))]),o("li",null,[n(r,{code:"-s /usr/sbin/nologin"}),e[4]||(e[4]=s(": 禁止登录 ",-1))]),o("li",null,[n(r,{code:"-g"}),e[5]||(e[5]=s(": 指定用户组 ",-1))])])])]),e[10]||(e[10]=o("h2",{class:"subtitle-size"},"二、设置文件权限",-1)),e[11]||(e[11]=o("p",null,"确保用户对Jar文件和工作目录有读取和执行权限",-1)),n(l,{language:"shell",code:d.value},null,8,["code"]),n(p,{content:"如果你的应用需要写入日志或临时文件，确保该用户对目标目录（如 /var/log/myapp/）有写权限："}),n(l,{language:"shell",code:a.value},null,8,["code"]),e[12]||(e[12]=o("h2",{class:"subtitle-size"},"三、Service示例文件",-1)),n(l,{language:"ini",code:m.value},null,8,["code"]),e[13]||(e[13]=o("h2",{class:"subtitle-size"},"四、验证用户",-1)),n(l,{language:"shell",code:g.value},null,8,["code"]),e[14]||(e[14]=o("h2",{class:"subtitle-size"},"五、动态用户（systemd 232+ 支持）",-1)),e[15]||(e[15]=o("p",null,"如果你的系统支持（较新版本 systemd），可以使用 DynamicUser=yes 自动创建临时用户：",-1)),n(l,{language:"ini",code:y.value},null,8,["code"]),n(p,{content:"无需手动创建用户，服务停止后用户自动销毁，更安全。但配置稍复杂，适合高级用户。"})])}}});export{k as default};
