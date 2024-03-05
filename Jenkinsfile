pipeline {
    agent {
        docker{
            image 'node:16-alpine'
             }
        }
    
    
    stages {

        stage('Test'){
            steps{
                sh 'node --version'
            }
        }
       
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build Docker image using Dockerfile from repository
                script {
                    docker.build('nodejs-image:latest', '-f Docker/Dockerfile .')
                }
            }
        }
    }
    
    post {
        success {
            echo "Build succeeded!"
        
        }
        failure {
                 echo "Build failed"
            }
           
        
        always {
                echo "Pipeline completed"
            }
            
        }
        // success {
        //     Push Docker image to Docker registry if needed
        //     script {
        //         docker.withRegistry('https://dockerhub.com', 'dockerhub-credentials-id') {
        //             dockerImage.push('your-image-name:latest')
        //         }
            
        //     }
        
    
}