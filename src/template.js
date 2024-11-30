export const redirectTemplate = (message, redirectUrl, redirectDelay) => `
<!DOCTYPE html>
<html>
<head>
    <title>Service Notice</title>
    <script>
        let count = ${redirectDelay};
        document.addEventListener('DOMContentLoaded', () => {
            const element = document.getElementById('countdown');
            const interval = setInterval(() => {
                count--;
                if (count <= 0) {
                    clearInterval(interval);
                    window.location.href = "${redirectUrl}";
                } else {
                    element.textContent = count;
                }
            }, 1000);
        });
    </script>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 600px;
            margin: 48px auto;
            padding: 20px;
            line-height: 1.6;
        }
        #countdown {
            display: inline-block;
            min-width: 10px;
            text-align: center;
            font-weight: bold;
        }
        .notice {
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border: 1px solid #dee2e6;
        }
    </style>
</head>
<body>
    <div class="notice">
        <h1>Service Notice</h1>
        <p>${message}</p>
        <p>Redirecting in <span id="countdown">${redirectDelay}</span> seconds...</p>
    </div>
</body>
</html>
`;
