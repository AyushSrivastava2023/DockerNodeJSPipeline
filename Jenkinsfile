pipeline {
    agent {
        docker {
            image 'node:20' 
            args '-u root' 
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
                sh 'ls -al'
                sh 'cd Docker && ls -al'
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
