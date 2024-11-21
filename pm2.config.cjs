module.exports = {
  apps: [
    {
      name: "server",
      script: "./server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: "8888",
      },
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
