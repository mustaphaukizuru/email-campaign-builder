const promotional = {
  id: 'promotional',
  name: 'Promotional Offer',
  description: 'Sales & discount campaigns — used at Blueflame Ltd. to drive 25% revenue growth',
  category: 'Sales',
  color: '#e53e3e',
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Special Offer</title>
</head>
<body style="margin:0;padding:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#e53e3e,#c53030);padding:40px 40px 30px;text-align:center;">
            <p style="margin:0 0 8px;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:2px;text-transform:uppercase;">Limited Time Offer</p>
            <h1 style="margin:0;color:#ffffff;font-size:42px;font-weight:800;line-height:1.1;">30% OFF</h1>
            <p style="margin:12px 0 0;color:rgba(255,255,255,0.9);font-size:18px;">Everything in our store this week</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;font-size:16px;color:#2d3748;line-height:1.7;">Hi [First Name],</p>
            <p style="margin:0 0 16px;font-size:16px;color:#4a5568;line-height:1.7;">
              We're excited to offer you an exclusive <strong style="color:#e53e3e;">30% discount</strong> on all our products — for this week only. This is our biggest sale of the year, and we didn't want you to miss it.
            </p>
            <p style="margin:0 0 28px;font-size:16px;color:#4a5568;line-height:1.7;">
              Use the code below at checkout and save instantly:
            </p>

            <!-- Coupon -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr><td align="center">
                <div style="display:inline-block;background:#fff5f5;border:2px dashed #fc8181;border-radius:8px;padding:16px 40px;text-align:center;">
                  <p style="margin:0 0 4px;font-size:12px;color:#e53e3e;letter-spacing:2px;text-transform:uppercase;">Your Discount Code</p>
                  <p style="margin:0;font-size:28px;font-weight:800;color:#c53030;letter-spacing:4px;">SAVE30</p>
                </div>
              </td></tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr><td align="center">
                <a href="#" style="display:inline-block;background:#e53e3e;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;padding:16px 48px;border-radius:6px;letter-spacing:0.5px;">Shop Now — Save 30%</a>
              </td></tr>
            </table>

            <!-- Features -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;padding:20px;margin-bottom:28px;">
              <tr>
                <td width="33%" style="text-align:center;padding:12px;">
                  <p style="margin:0 0 4px;font-size:20px;">🚚</p>
                  <p style="margin:0;font-size:13px;font-weight:700;color:#2d3748;">Free Shipping</p>
                  <p style="margin:4px 0 0;font-size:12px;color:#718096;">On orders over $50</p>
                </td>
                <td width="33%" style="text-align:center;padding:12px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
                  <p style="margin:0 0 4px;font-size:20px;">↩️</p>
                  <p style="margin:0;font-size:13px;font-weight:700;color:#2d3748;">Easy Returns</p>
                  <p style="margin:4px 0 0;font-size:12px;color:#718096;">30-day guarantee</p>
                </td>
                <td width="33%" style="text-align:center;padding:12px;">
                  <p style="margin:0 0 4px;font-size:20px;">🔒</p>
                  <p style="margin:0;font-size:13px;font-weight:700;color:#2d3748;">Secure Payment</p>
                  <p style="margin:4px 0 0;font-size:12px;color:#718096;">256-bit encryption</p>
                </td>
              </tr>
            </table>

            <p style="margin:0;font-size:13px;color:#a0aec0;text-align:center;">
              Offer expires Sunday at midnight. Cannot be combined with other discounts.
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

export default promotional;
