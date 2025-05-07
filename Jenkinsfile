pipeline {
    agent any

    tools {
        nodejs 'node20'  // ต้องตรงกับชื่อ NodeJS ใน Jenkins tools
    }

    environment {
        FIREBASE_TOKEN = credentials('firebase-token')
    }

    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo....."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('my-app') {
                    echo "Installing node modules..."
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('my-app') {
                    echo "Building project..."
                    sh 'npx vite build'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('my-app') {
                    echo "Deploying to Firebase....."
                    sh 'npx firebase deploy --only hosting --token=$FIREBASE_TOKEN'
                }
            }
        }
    }
}
