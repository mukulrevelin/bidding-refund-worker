node {
  
  checkout scm
  def imgVersion = "refund-prod-${currentBuild.number}"
  def dockerfile = "jenkins-script-prod/bidding-refund-worker.Dockerfile"
  def dockerImage = "mukulxinaam/rewards-bidding:${imgVersion}"
  def Namespace = "default"
  def PushToregistry = false

    stage('Clean workspace') {
      echo "Clean Workspace::"
    }

  if (params.PushToregistry == 'No'){
    stage('Build docker image') {
     sh "docker build -t ${dockerImage} -f ${dockerfile} ."
    }
  }
  
 if (params.PushToregistry == 'Yes'){
    stage('Build docker image') {
      sh "docker build -t ${dockerImage} -f ${dockerfile} ."
    }
    stage('Push docker image') {

       withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId:'dockerhub-mukul', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]){
             sh 'docker login -u $USERNAME -p $PASSWORD'
        }
            sh "docker push ${dockerImage}"
    }
  }

 stage('Delpoying the App on AKS') {
     sh "chmod +x changeTagProd.sh"
     sh "./changeTagProd.sh ${imgVersion}"
  withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId:'AzureLogin', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']])
  {
      sh 'az login -u $USERNAME -p $PASSWORD'
      sh 'az aks get-credentials -n mzaalo-production -g mzaalo-prod'
  }
      sh 'kubectl create -f jenkins-script-prod/kubectl/bidding-refund-worker-prod-app-pod.yaml'
   }
  
  stage('Mail Send Conformation') {
    mail (to: 'surendra@xfinite.io',
        subject: "Xfinite-bidding-refund-worker-Prod Job '${env.JOB_NAME}' (${env.BUILD_NUMBER})",
        body: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]")
  }
}
