pipeline {
    agent none
    
    
    stages {

        stage('Test'){
            agent {
        docker {
            image 'node:20' 
            args '-u root' 
        }
    }
            steps{
                sh 'node --version'
            }
        }
       
        stage('Install Dependencies') {
            agent {
        docker {
            image 'node:20' 
            args '-u root' 
        }
    }
            steps {
                sh 'ls -al'
                sh 'cd Docker && ls -al'
                sh 'cd Docker && npm install'
            }
        }
        
        stage('Build Docker Image') {
            agent any
            steps {
                script{
                    sh "cd Docker && docker build -t ayush/nod:v2 ."
                }
            }
        }
    }
    
    post {
        success {
            node(null){
            echo "Build succeeded!"
            }
           
        }
        failure {
            node(null){
                 echo "Build failed"
            }
           
        }
        always {
            node(null){
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
}
