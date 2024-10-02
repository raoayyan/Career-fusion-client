provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "pr_instance" {
  ami           = "ami-0c55b159cbfafe1f0"  # This is a common Amazon Linux 2 AMI in us-east-1, change for your region.
  instance_type = "t2.micro"

  tags = {
    Name = "PR-${var.pr_number}-instance"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y git nodejs
              # Optional: clone the repo inside EC2 and run npm commands here.
              EOF

  key_name = "my-github-keypair"

  # Output the instance's public IP
  associate_public_ip_address = true
}

output "public_ip" {
  value = aws_instance.pr_instance.public_ip
}

variable "pr_number" {
  description = "The pull request number to tag the instance"
}
