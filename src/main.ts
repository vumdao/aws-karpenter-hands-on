import { App } from 'aws-cdk-lib';
import { CDK_DEFAULT_ACCOUNT, CDK_DEFAULT_REGION } from './constants';
import { KarpenterServiceAccount } from './karpenter-sa';


const app = new App();

new KarpenterServiceAccount(app, 'KarpenterControllerSA', {
  description: 'Karpenter IAM Service Account',
  env: {
    region: CDK_DEFAULT_REGION,
    account: CDK_DEFAULT_ACCOUNT
  }
});

app.synth();