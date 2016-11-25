var VALID_DEPLOY_TARGETS = [
  'production',
  'staging',
];

module.exports = function(deployTarget) {

  if(deployTarget === 'production') {
    var deployUser = 'root'
    var deployHost = 'runverter.production'
  }else if(deployTarget === 'staging') {
    var deployUser = 'docker'
    var deployHost = 'runverter.staging'
  }

  var ENV = {
    build: {},
    redis : {
      allowOverwrite: true,
      keyPrefix: 'runverter:index'
    },
    s3 : {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: 's.runverter.io',
      region: 'eu-central-1',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,appcache}'
    },
    scp : {
      username: deployUser,
      host: deployHost,
      path: '~/runverter/'
    },
    'ssh-tunnel' : {
      username: deployUser,
      host: deployHost,
    }
  };

  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }
  return ENV;
};
