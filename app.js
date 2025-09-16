const http = require("http");

const hostname = "0.0.0.0";
const port = 80;

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Demo Node.js + Docker</title>
                <style>
                    body { font-family: Arial, background: #222; color: #eee; text-align: center; padding-top: 50px; }
                    h1 { color: #00d8ff; }
                    a { color: #ffd700; text-decoration: none; }
                    .footer { margin-top: 40px; font-size: 0.9em; color: #888; }
                </style>
            </head>
            <body>
                <h1>🚀 Hello, Docker + Node.js!</h1>
                <p>Parabéns, seu servidor está rodando dentro de um container Docker!</p>
                <p><a href="/sobre">Sobre esta demo</a></p>
                <div class="footer">Powered by Node.js & Docker</div>
            </body>
            </html>
        `);
    } else if (req.url === "/sobre") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Sobre</title>
            </head>
            <body style="background:#222;color:#eee;text-align:center;padding-top:50px;">
                <h2>Sobre esta Demo</h2>
                <p>Este é um exemplo simples de servidor Node.js rodando em Docker.</p>
                <p><a href="/">Voltar</a></p>
            </body>
            </html>
        `);
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head><meta charset="UTF-8"><title>404</title></head>
            <body style="background:#222;color:#eee;text-align:center;padding-top:50px;">
                <h2>404 - Página não encontrada</h2>
                <p><a href="/">Ir para Home</a></p>
            </body>
            </html>
        `);
    }
});

server.listen(port, hostname, () => {
    console.log("🚀 Server running at http://%s:%s/", hostname, port);
});

process.on("SIGINT", function () {
    console.log("Caught interrupt signal and will exit");
    process.exit();
});