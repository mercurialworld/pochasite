import * as cdk from "aws-cdk-lib";
import { PochaSiteStack } from "./stack";

const app = new cdk.App();
new PochaSiteStack(app, "PochaSiteStack", {
  env: { account: "575108959833", region: "us-east-1" },
});
