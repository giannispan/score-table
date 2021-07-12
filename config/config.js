export default {
  ip: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  mongo: {
    uri: 'mongodb://testAdmin:w4pp13R@test.wappier.com:27017/test',
    options: {
      db: {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    }
  },
  redis: {
    uri: 'redis://:w4pp13R@test.wappier.com:6379/1'
  }
};
