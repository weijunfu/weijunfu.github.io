<template>
<div class="linux-deploy">
  <h1 class="title-size">Linux部署</h1>

  <h2 class="subtitle-size">一、创建用户</h2>
  <dl>
    <dt>创建系统用户（无登录权限，无HOME目录）</dt>
    <dd>
      <FuCode language="shell" code="sudo adduser --system --no-create-home --group ijunfu" />
    </dd>
    <dd>
      <ul class="list-style-none">
        <li><FuLineCode code="--system" />: 创建系统用户（UID通常小于1000）</li>
        <li><FuLineCode code="--no-create-home" />: 不创建HOME目录</li>
        <li><FuLineCode code="--group" />: 创建同名的用户组</li>
      </ul>
    </dd>
    <dd>
      <FuQuote content="这是最推荐的方式，专用于运行服务，安全且简洁。" />
    </dd>
    <dt>手动创建用户</dt>
    <dd>
      <fu-code language="shell" code="suo groupadd weiGroup" />
      <fu-code language="shell" code="suo useradd -r -s /usr/sbin/nologin -g weiGroup wei" />
    </dd>
    <dd>
      <ul class="list-style-none">
        <li>
          <fu-line-code code="-r" />: 创建系统用户
        </li>
        <li>
          <fu-line-code code="-s /usr/sbin/nologin" />: 禁止登录
        </li>
        <li>
          <fu-line-code code="-g" />: 指定用户组
        </li>
      </ul>
    </dd>
  </dl>

  <h2 class="subtitle-size">二、设置文件权限</h2>
  <p>确保用户对Jar文件和工作目录有读取和执行权限</p>
  <fu-code language="shell" :code="codeRef" />
  <fu-quote content="如果你的应用需要写入日志或临时文件，确保该用户对目标目录（如 /var/log/myapp/）有写权限：" />
  <fu-code language="shell" :code="codeRef2" />

  <h2 class="subtitle-size">三、Service示例文件</h2>
  <fu-code language="ini" :code="serviceRef" />

  <h2 class="subtitle-size">四、验证用户</h2>
  <fu-code language="shell" :code="checkSheelRef" />

  <h2 class="subtitle-size">五、动态用户（systemd 232+ 支持）</h2>
  <p>如果你的系统支持（较新版本 systemd），可以使用 DynamicUser=yes 自动创建临时用户：</p>
  <fu-code language="ini" :code="codeRef3" />
  <fu-quote content="无需手动创建用户，服务停止后用户自动销毁，更安全。但配置稍复杂，适合高级用户。" />
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const codeRef = ref(`
# 假设你的 jar 在 /opt/myapp/myapp.jar
sudo chown ijunfu:ijunfu /opt/myapp/myapp.jar
sudo chmod 755 /opt/myapp/myapp.jar

# 设置工作目录权限
sudo chown -R ijunfu:ijunfu /opt/myapp/
`)

const codeRef2 = ref(`
sudo mkdir -p /var/log/myapp
sudo chown ijunfu:ijunfu /var/log/myapp
`)

const serviceRef = ref(`
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
`)

const checkSheelRef = ref(`
# 查看用户
id ijunfu

# 查看组
getent group ijunfu

# 或查看 /etc/passwd 和 /etc/group
grep ijunfu /etc/passwd
grep ijunfu /etc/group
`)


const codeRef3 = ref(`
[Service]
DynamicUser=yes
StateDirectory=myapp      # 自动创建 /var/lib/myapp 并赋权
LogsDirectory=myapp       # 自动创建 /var/log/myapp 并赋权
CacheDirectory=myapp
`)
</script>
<style scoped lang="scss">

</style>