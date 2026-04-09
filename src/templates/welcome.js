const welcome = {
  id: 'welcome',
  name: 'Welcome Email',
  description: 'Onboard new customers or users with a warm, professional first impression',
  category: 'Onboarding',
  color: '#38a169',
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome</title>
</head>
<body style="margin:0;padding:0;background:#f0fdf4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#38a169;padding:48px 40px;text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 20px;line-height:64px;font-size:28px;">👋</div>
            <h1 style="margin:0 0 10px;color:#ffffff;font-size:32px;font-weight:800;">Welcome Aboard!</h1>
            <p style="margin:0;color:rgba(255,255,255,0.9);font-size:17px;">We're thrilled to have you with us</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;font-size:16px;color:#2d3748;line-height:1.7;">Hi [First Name],</p>
            <p style="margin:0 0 16px;font-size:16px;color:#4a5568;line-height:1.7;">
              Thank you for joining us! Your account is ready and we can't wait to help you get started. Here's everything you need to know to hit the ground running.
            </p>

            <!-- Steps -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;">
              <tr>
                <td style="padding:0 0 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border-left:4px solid #38a169;border-radius:0 8px 8px 0;padding:16px 20px;">
                    <tr>
                      <td width="40" style="vertical-align:top;">
                        <div style="width:28px;height:28px;background:#38a169;border-radius:50%;text-align:center;line-height:28px;color:#fff;font-weight:700;font-size:14px;">1</div>
                      </td>
                      <td style="padding-left:12px;">
                        <p style="margin:0 0 4px;font-weight:700;color:#2d3748;font-size:15px;">Complete your profile</p>
                        <p style="margin:0;color:#718096;font-size:14px;">Add your details to personalise your experience</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border-left:4px solid #68d391;border-radius:0 8px 8px 0;padding:16px 20px;">
                    <tr>
                      <td width="40" style="vertical-align:top;">
                        <div style="width:28px;height:28px;background:#68d391;border-radius:50%;text-align:center;line-height:28px;color:#fff;font-weight:700;font-size:14px;">2</div>
                      </td>
                      <td style="padding-left:12px;">
                        <p style="margin:0 0 4px;font-weight:700;color:#2d3748;font-size:15px;">Explore the features</p>
                        <p style="margin:0;color:#718096;font-size:14px;">Browse our tools and find what works best for you</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border-left:4px solid #9ae6b4;border-radius:0 8px 8px 0;padding:16px 20px;">
                    <tr>
                      <td width="40" style="vertical-align:top;">
                        <div style="width:28px;height:28px;background:#9ae6b4;border-radius:50%;text-align:center;line-height:28px;color:#fff;font-weight:700;font-size:14px;">3</div>
                      </td>
                      <td style="padding-left:12px;">
                        <p style="margin:0 0 4px;font-weight:700;color:#2d3748;font-size:15px;">Reach out anytime</p>
                        <p style="margin:0;color:#718096;font-size:14px;">Our support team is here 24/7 to help you</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr><td align="center">
                <a href="#" style="display:inline-block;background:#38a169;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;padding:16px 48px;border-radius:6px;">Get Started Now</a>
              </td></tr>
            </table>

            <p style="margin:0;font-size:15px;color:#4a5568;line-height:1.7;">
              Have questions? Just reply to this email — we read every message personally.
            </p>
            <p style="margin:16px 0 0;font-size:15px;color:#2d3748;">
              Warm regards,<br/>
              <strong>The Team</strong>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#2d3748;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 8px;color:#a0aec0;font-size:13px;">© 2026 Your Company. All rights reserved.</p>
            <p style="margin:0;font-size:12px;">
              <a href="#" style="color:#718096;text-decoration:none;">Unsubscribe</a>
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

export default welcome;
