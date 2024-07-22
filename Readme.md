# Advanced Authentication System

![System Architecture]()

## Overview

This project implements an advanced authentication system with features including 2FA, trusted device management, and multi-channel notifications.

## System Components

### User Interface
- Login/Register/Google Auth options for user access

### API Gateway
- Central entry point for all client requests
- Routes requests to appropriate microservices

### Notification Service
- Sends Email notifications
- Sends SMS notifications

### Auth Service
- User Registration
- User Login
- 2FA Setup
- 2FA Verification
- Trusted Device Checking

### 2FA Service
- Generates 2FA Secrets
- Verifies 2FA Tokens

### Trusted Device/IP Service
- Adds trusted devices/IPs
- Checks device/IP trust status
- Removes trusted devices/IPs

### User Service
- Manages user profiles
- Handles security settings

### MongoDB Database
- Stores User Data
- Stores Device/IP Data

## Key Features

1. **Multi-factor Authentication**: Enhances security with 2FA.
2. **Trusted Device Management**: Allows users to manage known devices.
3. **IP Tracking**: Monitors and logs IP addresses for security.
4. **Multi-channel Notifications**: Alerts users via email and SMS.
5. **Google Auth Integration**: Provides alternative login method.


## Security Considerations

- All communications are encrypted using HTTPS
- Passwords are hashed and salted before storage
- Rate limiting is implemented to prevent brute-force attacks
- Regular security audits are conducted
