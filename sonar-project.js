const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://192.168.55.225:9000/',
       token : "0384998d61b1dc39655e6c953dea7d5574ec968d",
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'cypress/**' // Entry point of your code
       }
     }, () => {});