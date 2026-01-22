module.exports = {
  apps: [
    {
      name: "faithforcaldwell",
      cwd: "/var/www/faith_naff",

      script: "npm",
      args: "run dev -- --host 172.235.158.51 --port 3000 --strictPort",

      // Good defaults
      env: {
        NODE_ENV: "development",
      },

      autorestart: true,
      max_restarts: 10,
      restart_delay: 2000,
      time: true,

      // Optional: if you want logs in files instead of pm2's default
      // output: "/var/log/pm2/faithforcaldwell-dev.out.log",
      // error:  "/var/log/pm2/faithforcaldwell-dev.err.log",
      // log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
