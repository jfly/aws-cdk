"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const test_origin_1 = require("./test-origin");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'integ-distribution-key-group');
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAudf8/iNkQgdvjEdm6xYS
JAyxd/kGTbJfQNg9YhInb7TSm0dGu0yx8yZ3fnpmxuRPqJIlaVr+fT4YRl71gEYa
dlhHmnVegyPNjP9dNqZ7zwNqMEPOPnS/NOHbJj1KYKpn1f8pPNycQ5MQCntKGnSj
6fc+nbcC0joDvGz80xuy1W4hLV9oC9c3GT26xfZb2jy9MVtA3cppNuTwqrFi3t6e
0iGpraxZlT5wewjZLpQkngqYr6s3aucPAZVsGTEYPo4nD5mswmtZOm+tgcOrivtD
/3sD/qZLQ6c5siqyS8aTraD6y+VXugujfarTU65IeZ6QAUbLMsWuZOIi5Jn8zAwx
NQIDAQAB
-----END PUBLIC KEY-----`;
new cloudfront.Distribution(stack, 'Dist', {
    defaultBehavior: {
        origin: new test_origin_1.TestOrigin('www.example.com'),
        trustedKeyGroups: [
            new cloudfront.KeyGroup(stack, 'MyKeyGroup', {
                items: [
                    new cloudfront.PublicKey(stack, 'MyPublicKey', {
                        encodedKey: publicKey,
                    }),
                ],
            }),
        ],
    },
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuZGlzdHJpYnV0aW9uLWtleS1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLmRpc3RyaWJ1dGlvbi1rZXktZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsK0NBQTJDO0FBQzNDLHlEQUF5RDtBQUV6RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDhCQUE4QixDQUFDLENBQUM7QUFDakUsTUFBTSxTQUFTLEdBQUc7Ozs7Ozs7O3lCQVFPLENBQUM7QUFFMUIsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDekMsZUFBZSxFQUFFO1FBQ2YsTUFBTSxFQUFFLElBQUksd0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUN6QyxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRTtnQkFDM0MsS0FBSyxFQUFFO29CQUNMLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFO3dCQUM3QyxVQUFVLEVBQUUsU0FBUztxQkFDdEIsQ0FBQztpQkFDSDthQUNGLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IFRlc3RPcmlnaW4gfSBmcm9tICcuL3Rlc3Qtb3JpZ2luJztcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQnO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcCwgJ2ludGVnLWRpc3RyaWJ1dGlvbi1rZXktZ3JvdXAnKTtcbmNvbnN0IHB1YmxpY0tleSA9IGAtLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF1ZGY4L2lOa1FnZHZqRWRtNnhZU1xuSkF5eGQva0dUYkpmUU5nOVloSW5iN1RTbTBkR3UweXg4eVozZm5wbXh1UlBxSklsYVZyK2ZUNFlSbDcxZ0VZYVxuZGxoSG1uVmVneVBOalA5ZE5xWjd6d05xTUVQT1BuUy9OT0hiSmoxS1lLcG4xZjhwUE55Y1E1TVFDbnRLR25TalxuNmZjK25iY0Mwam9Edkd6ODB4dXkxVzRoTFY5b0M5YzNHVDI2eGZaYjJqeTlNVnRBM2NwcE51VHdxckZpM3Q2ZVxuMGlHcHJheFpsVDV3ZXdqWkxwUWtuZ3FZcjZzM2F1Y1BBWlZzR1RFWVBvNG5ENW1zd210Wk9tK3RnY09yaXZ0RFxuLzNzRC9xWkxRNmM1c2lxeVM4YVRyYUQ2eStWWHVndWpmYXJUVTY1SWVaNlFBVWJMTXNXdVpPSWk1Sm44ekF3eFxuTlFJREFRQUJcbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLWA7XG5cbm5ldyBjbG91ZGZyb250LkRpc3RyaWJ1dGlvbihzdGFjaywgJ0Rpc3QnLCB7XG4gIGRlZmF1bHRCZWhhdmlvcjoge1xuICAgIG9yaWdpbjogbmV3IFRlc3RPcmlnaW4oJ3d3dy5leGFtcGxlLmNvbScpLFxuICAgIHRydXN0ZWRLZXlHcm91cHM6IFtcbiAgICAgIG5ldyBjbG91ZGZyb250LktleUdyb3VwKHN0YWNrLCAnTXlLZXlHcm91cCcsIHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICBuZXcgY2xvdWRmcm9udC5QdWJsaWNLZXkoc3RhY2ssICdNeVB1YmxpY0tleScsIHtcbiAgICAgICAgICAgIGVuY29kZWRLZXk6IHB1YmxpY0tleSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0sXG59KTtcblxuYXBwLnN5bnRoKCk7Il19