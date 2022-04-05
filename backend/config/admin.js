module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5643fa2f2ad3713d263fef7ab365518a'),
  },
});
