import * as cdk from "aws-cdk-lib";
import { CodeDeployApp, getRepoFromEnv } from "chaeri";
import { Construct } from "constructs";

export class PochaSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    new CodeDeployApp(this, "CodeDeploy", {
      githubRepo: getRepoFromEnv(),
      codedeployGitHubEnv: "codedeploy",
      onPremInstanceTag: "dreamcatching",
    });
  }
}
