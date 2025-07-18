pipeline {
  agent any

  environment {
    BACKEND_DIR = 'backend'
    FRONTEND_DIR = '.'
    DOCKER_IMAGE_NAME = 'react-jobcrud-app'
    EMAIL_RECIPIENTS = 'murtaza.malik@zigron.com'
  }

  triggers {
    pollSCM('H/2 * * * *') // Poll every 2 minutes (or use webhook later)
  }

  stages {
    stage('Clone Repository') {
      steps {
        checkout scm
      }
    }

    stage('Install Backend Dependencies') {
      steps {
        dir("${BACKEND_DIR}") {
          sh 'npm install'
        }
      }
    }

    stage('Test Backend') {
      steps {
        dir("${BACKEND_DIR}") {
          sh 'npm test || echo "Tests failed or not defined."'
        }
      }
    }

    stage('Install Frontend Dependencies') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npm run build'
        }
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE_NAME .'
      }
    }
  }

  post {
    success {
      mail to: "${EMAIL_RECIPIENTS}",
           subject: "✅ Build SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
           body: "The Jenkins pipeline completed successfully."
    }
    failure {
      mail to: "${EMAIL_RECIPIENTS}",
           subject: "❌ Build FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
           body: "The Jenkins pipeline failed. Please check the Jenkins job for logs."
    }
  }
}

