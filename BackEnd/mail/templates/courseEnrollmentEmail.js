exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #f4f4f7;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: #51545e;
            }
    
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                padding: 40px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
    
            .logo {
                max-width: 150px;
                margin: 0 auto 30px;
                display: block;
            }
    
            .header {
                font-size: 24px;
                font-weight: bold;
                color: #333333;
                margin-bottom: 20px;
                text-align: center;
            }
    
            .body {
                font-size: 16px;
                line-height: 1.6;
                color: #51545e;
                margin-bottom: 30px;
            }
    
            .body p {
                margin: 0 0 15px;
            }
    
            .highlight {
                font-weight: bold;
                color: #1a82e2;
            }
    
            .cta {
                display: inline-block;
                padding: 15px 30px;
                background-color: #1a82e2;
                color: #f2eb1d;
                text-decoration: none;
                font-weight: bold;
                border-radius: 5px;
                margin-top: 30px;
            }
    
            .footer {
                font-size: 14px;
                color: #999999;
                text-align: center;
                margin-top: 30px;
            }
    
            .footer a {
                color: #1a82e2;
                text-decoration: none;
            }
    
            .footer a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <a href="https://edulicious-bhushan.vercel.app/">
                <img class="logo" src="https://res.cloudinary.com/dukvkbkoh/image/upload/v1726995306/StudyNotion/Mail-logo_tnlnvc.png" alt="Edulicious Logo">
            </a>
            <div class="header">Course Registration Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>Congratulations! You have successfully enrolled in the course <span class="highlight">"${courseName}"</span>.</p>
                <p>We are thrilled to have you on board and can't wait to support your learning journey.</p>
                <p>Access the course materials and begin your learning by visiting your personalized dashboard:</p>
                <a class="cta" href="https://edulicious-bhushan.vercel.app/dashboard">Go to Dashboard</a>
            </div>
            <div class="footer">
                <p>Need help? Contact us anytime at <a href="mailto:info@edulicious.com">info@edulicious.com</a>.</p>
                <p>&copy; ${new Date().getFullYear()} Edulicious. All rights reserved.</p>
            </div>
        </div>
    </body>
    
    </html>`;
};
