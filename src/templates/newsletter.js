const newsletter = {
  id: 'newsletter',
  name: 'Newsletter',
  description: 'Monthly updates, news and content digest for subscriber engagement',
  category: 'Content',
  color: '#3182ce',
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Newsletter</title>
</head>
<body style="margin:0;padding:0;background:#ebf8ff;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ebf8ff;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#2b6cb0;padding:28px 40px;text-align:center;">
            <p style="margin:0 0 6px;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:3px;text-transform:uppercase;">Monthly Newsletter</p>
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;">The Tech & Education Digest</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">April 2026 Edition</p>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:32px 40px 24px;">
            <p style="margin:0 0 12px;font-size:16px;color:#2d3748;line-height:1.7;">Hi [First Name],</p>
            <p style="margin:0;font-size:15px;color:#4a5568;line-height:1.8;">
              Here's your monthly roundup of the latest in technology, education, and digital transformation. We've handpicked the stories that matter most to you.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"/></td></tr>

        <!-- Article 1 -->
        <tr>
          <td style="padding:28px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#ebf8ff;border-radius:8px;padding:20px;">
                  <p style="margin:0 0 6px;font-size:11px;color:#3182ce;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Featured Story</p>
                  <h2 style="margin:0 0 10px;font-size:19px;color:#2d3748;line-height:1.4;">How AI is Transforming Classroom Learning in 2026</h2>
                  <p style="margin:0 0 16px;font-size:14px;color:#718096;line-height:1.7;">
                    Schools worldwide are adopting AI-powered tools to personalise learning experiences. We explore the top 5 platforms making the biggest impact in bilingual and international schools.
                  </p>
                  <a href="#" style="display:inline-block;color:#3182ce;text-decoration:none;font-size:14px;font-weight:700;">Read Full Article →</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Article 2 & 3 side by side -->
        <tr>
          <td style="padding:0 40px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="48%" style="vertical-align:top;">
                  <p style="margin:0 0 6px;font-size:11px;color:#e53e3e;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Tech</p>
                  <h3 style="margin:0 0 8px;font-size:16px;color:#2d3748;line-height:1.4;">Django 5.0 — What's New for Developers</h3>
                  <p style="margin:0 0 12px;font-size:13px;color:#718096;line-height:1.6;">The latest Django release brings async improvements and new ORM features worth knowing.</p>
                  <a href="#" style="color:#3182ce;text-decoration:none;font-size:13px;font-weight:700;">Read more →</a>
                </td>
                <td width="4%"></td>
                <td width="48%" style="vertical-align:top;">
                  <p style="margin:0 0 6px;font-size:11px;color:#38a169;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Education</p>
                  <h3 style="margin:0 0 8px;font-size:16px;color:#2d3748;line-height:1.4;">Google Workspace Tips for School IT Managers</h3>
                  <p style="margin:0 0 12px;font-size:13px;color:#718096;line-height:1.6;">10 lesser-known Workspace features that save hours of admin time every week.</p>
                  <a href="#" style="color:#3182ce;text-decoration:none;font-size:13px;font-weight:700;">Read more →</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"/></td></tr>

        <!-- Quote -->
        <tr>
          <td style="padding:28px 40px;">
            <blockquote style="margin:0;padding:20px 24px;background:#f7fafc;border-left:4px solid #3182ce;border-radius:0 8px 8px 0;">
              <p style="margin:0 0 10px;font-size:16px;color:#4a5568;line-height:1.7;font-style:italic;">"The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education."</p>
              <p style="margin:0;font-size:13px;color:#a0aec0;font-weight:700;">— Martin Luther King Jr.</p>
            </blockquote>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 40px 36px;text-align:center;">
            <a href="#" style="display:inline-block;background:#3182ce;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 40px;border-radius:6px;">Visit Our Website</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#2d3748;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 8px;color:#a0aec0;font-size:13px;">© 2026 Your Company · 123 Street, Mexico City</p>
            <p style="margin:0;font-size:12px;">
              <a href="#" style="color:#718096;text-decoration:none;">Unsubscribe</a>
              <span style="color:#4a5568;margin:0 8px;">|</span>
              <a href="#" style="color:#718096;text-decoration:none;">View in browser</a>
              <span style="color:#4a5568;margin:0 8px;">|</span>
              <a href="#" style="color:#718096;text-decoration:none;">Privacy Policy</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
};

export default newsletter;
