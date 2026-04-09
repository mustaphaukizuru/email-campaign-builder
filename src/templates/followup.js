const followup = {
  id: 'followup',
  name: 'Follow-up / Re-engagement',
  description: 'Win back inactive subscribers or follow up after sales interactions',
  category: 'Retention',
  color: '#805ad5',
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We miss you</title>
</head>
<body style="margin:0;padding:0;background:#faf5ff;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf5ff;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#6b46c1;padding:48px 40px;text-align:center;">
            <div style="font-size:48px;margin-bottom:16px;">💜</div>
            <h1 style="margin:0 0 10px;color:#ffffff;font-size:30px;font-weight:800;">We Miss You, [First Name]</h1>
            <p style="margin:0;color:rgba(255,255,255,0.85);font-size:17px;">It's been a while — we wanted to check in</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;font-size:16px;color:#4a5568;line-height:1.8;">
              Hey [First Name], we noticed you haven't visited us in a while, and we wanted to reach out personally. A lot has changed since you were last here — and we think you'll love what's new.
            </p>
            <p style="margin:0 0 28px;font-size:16px;color:#4a5568;line-height:1.8;">
              As a thank-you for being part of our community, we're offering you an exclusive returning customer discount:
            </p>

            <!-- Offer box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr><td align="center">
                <div style="background:#faf5ff;border:2px dashed #b794f4;border-radius:8px;padding:24px 40px;text-align:center;">
                  <p style="margin:0 0 4px;font-size:12px;color:#805ad5;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Exclusive Returning Customer Offer</p>
                  <p style="margin:8px 0;font-size:36px;font-weight:800;color:#553c9a;">20% OFF</p>
                  <p style="margin:0 0 4px;font-size:14px;color:#6b7280;">Use code:</p>
                  <p style="margin:0;font-size:22px;font-weight:800;color:#6b46c1;letter-spacing:3px;">WELCOME BACK</p>
                  <p style="margin:12px 0 0;font-size:12px;color:#a0aec0;">Valid for 7 days only</p>
                </div>
              </td></tr>
            </table>

            <!-- What's new section -->
            <p style="margin:0 0 16px;font-size:16px;font-weight:700;color:#2d3748;">Here's what's new since you left:</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e6ff;">
                  <table width="100%"><tr>
                    <td width="32" style="color:#805ad5;font-size:18px;">✨</td>
                    <td style="font-size:14px;color:#4a5568;">New product line launched — over 50 new items added</td>
                  </tr></table>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e6ff;">
                  <table width="100%"><tr>
                    <td width="32" style="color:#805ad5;font-size:18px;">⚡</td>
                    <td style="font-size:14px;color:#4a5568;">Faster checkout and improved mobile experience</td>
                  </tr></table>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <table width="100%"><tr>
                    <td width="32" style="color:#805ad5;font-size:18px;">🎁</td>
                    <td style="font-size:14px;color:#4a5568;">New loyalty rewards program — earn points on every purchase</td>
                  </tr></table>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr><td align="center">
                <a href="#" style="display:inline-block;background:#6b46c1;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;padding:16px 48px;border-radius:6px;">Claim My 20% Discount</a>
              </td></tr>
            </table>

            <!-- Opt-out option -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7fafc;border-radius:8px;padding:16px 20px;">
              <tr><td style="text-align:center;">
                <p style="margin:0;font-size:13px;color:#718096;line-height:1.6;">
                  Not interested in coming back? No hard feelings.<br/>
                  <a href="#" style="color:#805ad5;text-decoration:none;font-weight:700;">Click here to unsubscribe</a> and we'll stop sending emails.
                </p>
              </td></tr>
            </table>
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
              <span style="color:#4a5568;margin:0 8px;">|</span>
              <a href="#" style="color:#718096;text-decoration:none;">Contact Us</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
};

export default followup;
