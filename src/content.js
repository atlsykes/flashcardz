const content = [
  {
    id: 1,
    question: 'Which AWS service provides API monitoring and logging?',
    answer: 'Cloud Trail'
  },
  {
    id: 2,
    question: 'Which AWS tool provides an IDE in the cloud?',
    answer: 'Cloud9'
  },
  {
    id: 3,
    question: 'What service provides secure and resizable compute capacity?',
    answer: 'Amazon Elastic Compute Cloud (EC2)'
  },
  {
    id: 4,
    question:
      'What enables on demand delivery of compute, database, applications, and other IT resources?',
    answer: 'Cloud computing'
  },
  {
    id: 5,
    question:
      'What are the 3 cloud based deployment models that AWS allows for?',
    answer: 'public, private, and hybrid cloud'
  },
  {
    id: 6,
    question: 'What are the 3 types of cloud computing?',
    answer:
      '1. Infrastructure as a Service (IAAS) 2. Platform as a Service (PAAS) 3. Software as a Service (SAAS)'
  },
  {
    id: 7,
    question:
      'What contains 84 Availability Zones within 26 geographic regions around the world, with announced plans for 24 more Availability Zones and 8 more AWS Regions in Australia, Canada, India, Israel, New Zealand, Spain, Switzerland, and United Arab Emirates (UAE).?',
    answer: 'AWS Global Infrastructure'
  },
  {
    id: 8,
    question: 'What is a fully isolated partition of AWS infrastructure?',
    answer: 'Availability Zone'
  },
  {
    id: 9,
    question:
      'What is a global geographic location with AWS data centers called?',
    answer: 'AWS region'
  },
  {
    id: 10,
    question:
      'What is the name of a model where the customer assumes responsibility and management of the guest operating system (including updates and security patches), other associated application software as well as the configuration of the AWS provided security group firewall?',
    answer: 'AWS shared responsibility model'
  },
  {
    id: 11,
    question:
      'This service provides the infrastructure necessary to control authentication and authorization for your account.',
    answer: 'AWS Identity and Access Management'
  },
  {
    id: 12,
    question:
      'The user, group, role, policy, and identity provider objects that are stored in IAM. As with other AWS services, you can add, edit, and remove resources from IAM.',
    answer: 'IAM Resources '
  },
  {
    id: 13,
    question:
      'The IAM resource objects that are used to identify and group. You can attach a policy to an IAM identity. These include users, groups, and roles.',
    answer: 'IAM Identities '
  },
  {
    id: 14,
    question:
      'The IAM resource objects that AWS uses for authentication. These include IAM users and roles.',
    answer: 'IAM Entities'
  },
  {
    id: 15,
    question:
      'A person or application that uses the AWS account root user, an IAM user, or an IAM role to sign in and make requests to AWS. Principals include federated users and assumed roles.',
    answer: 'IAM Principals'
  },
  {
    id: 16,
    question:
      'For IAM, you give __________ to a user by creating an identity-based policy, which is a policy that is attached to the user or a group to which the user belongs.',
    answer: 'permissions'
  },
  {
    id: 17,
    question: `For IAM, this is an example of ______:
{
"Version": "2012-10-17",
"Statement": {
  "Effect": "Allow",
  "Action": "dynamodb:*",
  "Resource": "arn:aws:dynamodb:us-east-2:123456789012:table/Books"
}
}`,
    answer: 'JSON policy'
  },
  {
    id: 18,
    question:
      'An authorization strategy that defines permissions based on attributes. In AWS, these attributes are called tags. You can attach tags to IAM resources, including IAM entities (users or roles) and to AWS resources.',
    answer: 'Attribute-based access control (ABAC)'
  },
  {
    id: 19,
    question:
      '___ adds extra security because it requires users to provide unique authentication from an AWS supported ___ mechanism in addition to their regular sign-in credentials when they access AWS websites or services:',
    answer: 'Multi-factor Authentication (MFA)'
  },
  {
    id: 20,
    question: 'What are the MFA device options in AWS?',
    answer:
      '1. Virtual MFA (via Google authentication or Authy) 2. Physical MFA (via yubikey or key fob)'
  },
  {
    id: 21,
    question: 'What are the different ways users can access AWS?',
    answer:
      '1. AWS Management Console 2. AWS CLI 3. AWS SDK (protected by access keys) 4. AWS Cloudshell'
  },
  {
    id: 22,
    type: 'list',
    question:
      'For data protection purposes, it is recommended that you protect AWS account credentials and set up individual user accounts with AWS Identity and Access Management (IAM). That way each user is given only the permissions necessary to fulfill their job duties. It is also recommend that you secure your data in the following ways:',
    listAnswer: [
      '- Use multi-factor authentication (MFA) with each account.',
      '- Use SSL/TLS to communicate with AWS resources. We recommend TLS 1.2 or later.',
      '- Set up API and user activity logging with AWS CloudTrail.',
      '- Use AWS encryption solutions, along with all default security controls within AWS services.',
      '- Use advanced managed security services such as Amazon Macie, which assists in discovering and securing personal data that is stored in Amazon S3.',
      '- If you require FIPS 140-2 validated cryptographic modules when accessing AWS through a command line interface or an API, use a FIPS endpoint.'
    ]
  },
  {
    id: 23,
    type: 'list',
    question:
      'What are some security guidelines and best practices for IAM in AWS?',
    listAnswer: [
      '- Lock away your AWS account root user access keys',
      '- Use roles to delegate permissions',
      '- Grant least privilege',
      '- Get started using permissions with AWS managed policies',
      '- Validate your policies',
      '- Use customer managed policies instead of inline policies',
      '- Use access levels to review IAM permissions',
      '- Configure a strong password policy for your users',
      '- Enable MFA',
      '- Use roles for applications that run on Amazon EC2 instances',
      '- Do not share access keys',
      '- Rotate credentials regularly',
      '- Remove unnecessary credentials',
      '- Use policy conditions for extra security',
      '- Monitor activity in your AWS account'
    ]
  },
  {
    id: 24,
    question:
      'This IAM tool helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk.',
    answer: 'AWS IAM Access Analyzer'
  },
  {
    id: 25,
    question:
      'This dashboard can be used to gain a general view of your AWS spending. You can also use it to identify your highest cost service or Region and view trends in your spending over the past few months. You can use the dashboard page to see various breakdowns of your AWS usage. ',
    answer: 'AWS Billing console dashboard'
  },
  {
    id: 26,
    question:
      'An open source tool that enables you to interact with AWS services using commands in your command-line shell.',
    answer: 'AWS Command Line Interface (CLI)'
  },
  {
    id: 27,
    question:
      'These developer kits enable you to access and manage AWS services programmatically and contain language specific API’s',
    answer: 'AWS Software Development Kits (SDKs)'
  },
  {
    id: 28,
    question:
      'A browser-based shell that makes it easier to securely manage, explore, and interact with your AWS resources. ',
    answer: 'AWS Cloudshell'
  },
  {
    id: 29,
    question:
      'What are a type of organization policy that you can use to manage permissions in your organization and help you to ensure your accounts stay within your organization’s access control guidelines.',
    answer: 'Service Control Policies (SCP)'
  },
  {
    id: 30,
    question:
      'What service provides general purpose, compute optimized, memory optimized, storage optimized, and accelerated computing instance types are available that provide the optimal compute, memory, storage, and networking balance for your workloads?',
    answer: 'EC2'
  },
  {
    id: 31,
    question:
      'A template that contains a software configuration (for example, an operating system, an application server, and applications) from which you can launch an instance in AWS.',
    answer: 'Amazon Machine Image (AMI)'
  },
  {
    id: 32,
    question:
      'Amazon EC2 provides a wide selection of _______ _____ optimized for different use cases. They can meet your requirements based on factors such as supported Regions, compute resources, or storage resources. They also combine the instance family, generation, and size. Examples include C4, C5, M4, M5, etc.',
    answer: 'EC2 instance types'
  },
  {
    id: 33,
    question:
      'A virtual firewall for your EC2 instances to control incoming and outgoing traffic. Inbound rules control the incoming traffic to your instance, and outbound rules control the outgoing traffic from your instance.',
    answer: 'Amazon EC2 Security Groups'
  },
  {
    id: 34,
    question: 'For EC2 security groups, what are the commonly used ports?',
    answer:
      '21 for FTP, 22 for SSH or SFTP, 80 for HTTP, 443 for HTTPS, 3389 for remote desktop (Windows)'
  },
  {
    id: 35,
    question:
      'What is a scalable, high-performance block-storage service designed for Amazon Elastic Compute Cloud (Amazon EC2)? ',
    answer: 'Amazon Elastic Block Store (EBS)'
  },
  {
    id: 36,
    question:
      'A durable, block-level storage device that you can attach to your instances. After you attach a ______ to an instance, you can use it as you would use a physical hard drive.',
    answer: 'Amazon EBS Volumes'
  },
  {
    id: 37,
    question: 'What are the 5 different types of EBS volumes?',
    answer:
      'General Purpose SSD (gp2 and gp3), Provisioned IOPS SSD (io1 and io2), Throughput Optimized HDD (st1), Cold HDD (sc1), and Magnetic (standard).'
  },
  {
    id: 38,
    question:
      'What is an incremental, point-in time, backup of an EBS volume called?',
    answer: 'Amazon EBS snapshot'
  },
  {
    id: 39,
    question:
      'Which service provides a one-stop shop to build, secure, and test up-to-date Virtual Machine and container images using common workflows?',
    answer: 'EC2 Image Builder'
  },
  {
    id: 40,
    question:
      '___ ______ ______ provides temporary block-level storage for your instance. This storage is located on disks that are physically attached to the host computer. It is ideal for temporary storage of information that changes frequently, such as buffers, caches, scratch data, and other temporary content, or for data that is replicated across a fleet of instances, such as a load-balanced pool of web servers.',
    answer: 'EC2 Instance Store'
  },
  {
    id: 41,
    question:
      'Which system or service provides a simple, serverless, set-and-forget elastic file system for use with AWS Cloud services and on-premises resources that supports the Network File System version 4 (NFSv4.1 and NFSv4.0) protocol? ',
    answer: 'Amazon Elastic File System (EFS)'
  },
  {
    id: 42,
    question:
      'What is the name of a storage class concept which is cost optimized for files not accessed everyday? ',
    answer: 'EFS - Infrequent Access(IA)'
  },
  {
    id: 43,
    question:
      'Which service provides fully managed Microsoft Windows file servers, backed by a fully native Windows file system, and supports a broad set of enterprise Windows workloads with fully managed file storage built on Microsoft Windows Server?',
    answer: 'Amazon FSx for Windows File Server'
  },
  {
    id: 44,
    question:
      'Which file server based service allows you to run the popular, high-performance Lustre file system, that is used for  workloads where speed matters, such as machine learning, high performance computing (HPC), video processing, and financial modeling?',
    answer: 'Amazon FSx for Lustre'
  },
  {
    id: 45,
    question: 'What is the definition of vertical scalability related to EC2?',
    answer:
      'Ability of a service to increase the size of the instance as you scale up.'
  },
  {
    id: 46,
    question:
      'What is the definition of horizontal scalability related to EC2?',
    answer:
      'Ability of service to increase the number of  instances/systems for your application as you scale up.'
  },
  {
    id: 47,
    question:
      'An AWS concept that refers to having instances/systems for the same app across multiple availability zones. It usually goes hand in hand with horizontal scaling',
    answer: 'High availability'
  },
  {
    id: 48,
    question:
      'A cloud computing concept where streamlining of resource acquisition and release, so that your infrastructure can rapidly scale in and scale out as demand fluctuates.',
    answer: 'Elasticity'
  },
  {
    id: 49,
    question:
      'What is the difference between scalability and elasticity in cloud computing?',
    answer:
      'Scalability is the ability to accommodate a larger load by manually adding size and/or instances/systems for an app. Elasticity is cloud intrinsic whereby auto-scaling of instances/systems is accomplished based on current demand/loading.'
  },
  {
    id: 50,
    question:
      "A ____ ______ distributes traffic among your environment's instances",
    answer: 'load balancer'
  },
  {
    id: 51,
    question:
      '______ _______ ________ automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones. It monitors the health of its registered targets, and routes traffic only to the healthy targets.',
    answer: 'Elastic Load Balancing (ELB)'
  },
  {
    id: 52,
    type: 'list',
    question: 'What are the 4 kinds of load balancers?',
    listAnswer: [
      '1. An Application Load Balancer functions at the application layer, the seventh layer of the Open Systems Interconnection (OSI) model. It monitors the health of its registered targets, and routes traffic only to the healthy targets. (HTTP/HTTPS).',
      '2. A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. It can handle millions of requests per second.(TCP)',
      '3. A Classic A load balancer distributes incoming application traffic across multiple EC2 instances in multiple Availability Zones. This increases the fault tolerance of your applications. (original)',
      "4. A Gateway Load Balancer operates at the third layer of the Open Systems Interconnection (OSI) model, the network layer. It listens for all IP packets across all ports and forwards traffic to the target group that's specified in the listener rule. It maintains stickiness of flows to a specific target appliance using 5-tuple (for TCP/UDP flows) or 3-tuple (for non-TCP/UDP flows)."
    ]
  },
  {
    id: 53,
    question:
      'What type of group contains a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management? It also enables you to use Amazon EC2 features such as health check replacements and scaling policies. ',
    answer: 'Auto Scaling Group (ASG)'
  },
  {
    id: 54,
    type: 'list',
    question: "What are the 2 types of scaling strategies for ASG's?",
    listAnswer: [
      '1. Manual scaling - the size of an ASG depends on the number of instances that you set as the desired capacity. You can manually adjust its size to meet demand.',
      '2. Dynamic scaling - you can use scaling policies to increase or decrease the number of instances in your group dynamically to meet changing conditions. When the scaling policy is in effect, the Auto Scaling group adjusts the desired capacity of the group, between the minimum and maximum capacity values that you specify, and launches or terminates the instances as needed.'
    ]
  },
  {
    id: 55,
    question:
      'Which service is an object storage service that offers industry-leading scalability, data availability, security, and performance? It is also considered a main building block for AWS. ',
    answer: 'Amazon Simple Storage Service (S3)'
  },
  {
    id: 56,
    question: 'What are some use cases for Amazon S3?',
    answer:
      'Backup & storage, disaster recovery, archives, hybrid cloud storage, application hosting, media hosting, software delivery, static website.'
  },
  {
    id: 57,
    type: 'list',
    question:
      'Amazon S3 is an object store that uses unique key-values to store as many objects as you want. You store these objects in one or more buckets, and each object can be up to 5 TB in size. An object consists of the following attributes/characteristics (6):',
    listAnswer: [
      '- Key > The name that you assign to an object. You use the object key to retrieve the object.',
      '- Version ID > Within a bucket, a key and version ID uniquely identify an object. The version ID is a string that Amazon S3 generates when you add an object to a bucket.',
      '- Value > The content that you are storing. An object value can be any sequence of bytes. Objects can range in size from zero to 5 TB. For more information, see Uploading objects.',
      '- Metadata> A set of name-value pairs with which you can store information regarding the object. You can assign metadata, referred to as user-defined metadata, to your objects in Amazon S3. Amazon S3 also assigns system-metadata to these objects, which it uses for managing objects.',
      '- Subresources > Amazon S3 uses the subresource mechanism to store object-specific additional information. Because subresources are subordinates to objects, they are always associated with some other entity such as an object or a bucket.',
      '- Access control information > You can control access to the objects you store in Amazon S3. Amazon S3 supports both the resource-based access control, such as an access control list (ACL) and bucket policies, and user-based access control.'
    ]
  },
  {
    id: 58,
    type: 'list',
    question:
      'What are the 3 types of access policy options available for Amazon S3?',
    listAnswer: [
      '1. resource based - Access policies that you attach to your resources (buckets and objects)',
      '2. user based - using IAM to attach access policies to a user',
      '3. access control list (ACL) - grant basic read and write access to other accounts'
    ]
  },
  {
    id: 59,
    question:
      'The Amazon S3 _____ _____ _____ feature provides settings for access points, buckets, and accounts to help you manage public access to Amazon S3 resources. By default, new buckets, access points, and objects dont allow this type of access.',
    answer: 'Block Public Access'
  },
  {
    id: 60,
    question:
      'This feature of Amazon S3 is a means of keeping multiple variants of an object in the same bucket. You can use it to preserve, retrieve, and restore every version of every object stored in your buckets. With it you can recover more easily from both unintended user actions and application failures. ',
    answer: 'Versioning'
  },
  {
    id: 61,
    question:
      '___________ enables automatic, asynchronous copying of objects across Amazon S3 buckets. Buckets that are configured for object ____________ can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different AWS Regions or within the same Region as the source bucket.',
    answer: 'Replication'
  },
  {
    id: 62,
    type: 'list',
    question: 'What are the 5 main types of storage classes for Amazon S3?',
    listAnswer: [
      '- S3 Standard — The default storage class. If you do not specify the storage class when you upload an object, Amazon S3 assigns the S3 Standard storage class.',
      '- Reduced Redundancy — The Reduced Redundancy Storage (RRS) storage class is designed for noncritical, reproducible data that can be stored with less redundancy than the S3 Standard storage class.',
      '- S3 Intelligent-Tiering is an Amazon S3 storage class designed to optimize storage costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead.',
      '- The S3 Standard-IA and S3 One Zone-IA storage classes are designed for long-lived and infrequently accessed data. (IA)',
      '- The S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, and S3 Glacier Deep Archive storage classes are designed for low-cost data archiving. '
    ]
  },
  {
    id: 63,
    question:
      'What storage classes offer the same durability and resiliency as the other multi-AZ Amazon S3 storage classes, but, stored objects are not available for real-time access. Their intended storage time length is much longer (years) and data retrieval can anywhere between minutes and hours.',
    answer: 'Amazon Glacier & Glacier Deep Archive'
  },
  {
    id: 64,
    question:
      'What S3 feature can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely and allows for use of the WORM model (write once read many)?',
    answer: 'S3 object lock'
  },
  {
    id: 65,
    question:
      'When paying for object storage in S3, what are the rate considerations?',
    answer:
      "The rate you’re charged depends on your objects' size, how long you stored the objects during the month, and the storage class."
  },
  {
    id: 66,
    question:
      'What S3 feature allows you to easily deploy and enforce compliance controls for individual S3 Glacier vaults with a policy. You can specify controls such as “write once read many” (WORM) in a policy and lock the policy from future edits. Once locked, the policy can no longer be changed.',
    answer: 'S3 Glacier Vault Lock'
  },
  {
    id: 67,
    type: 'list',
    question:
      'Data protection refers to protecting data while in-transit (as it travels to and from Amazon S3) and at rest (while it is stored on disks in Amazon S3 data centers). You can protect data in transit using Secure Socket Layer/Transport Layer Security (SSL/TLS) or client-side encryption. What are 2 options for protecting data at rest in Amazon S3?',
    listAnswer: [
      '- Server-Side Encryption – Request Amazon S3 to encrypt your object before saving it on disks in its data centers and then decrypt it when you download the objects.',
      '- Client-Side Encryption – Encrypt data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, the encryption keys, and related tools.'
    ]
  },
  {
    id: 68,
    question:
      'Which service helps customers who need to run operations in austere, non-data center environments, and in locations where there is no consistent network connectivity? You can use these devices to locally and cost-effectively access the storage and compute power of the AWS Cloud in places where an internet connection might not be an option.',
    answer: 'AWS Snow family'
  },
  {
    id: 69,
    question:
      'Which service service uses physical storage devices to transfer large amounts of data between Amazon Simple Storage Service (Amazon S3) and your onsite data storage location at faster-than-internet speeds, and is intended for large data transfers?',
    answer: 'AWS Snowball'
  },
  {
    id: 70,
    question:
      'What is a portable, rugged, and secure device for edge computing and data transfer and can have either 8 or 15TB of data storage?',
    answer: 'AWS Snowcone'
  },
  {
    id: 71,
    question:
      'What service moves up to 100 PB of data in a 45-foot long ruggedized shipping container and is ideal for multi-petabyte or Exabyte-scale digital media migrations and data center shutdowns?',
    answer: 'AWS Snowmobile'
  },
  {
    id: 73,
    question: 'What is a web service that makes it easier to set up, operate, and scale a relational database in the cloud that also provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks?',
    answer: 'Amazon RDS'
  },
  {
    id: 74,
    question: 'Which database service has MongoDB capability?',
    answer: 'DocumentDB'
  },
  {
    id: 75,
    question: 'What is the name of a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability?',
    answer: 'DynamoDB'
  },
  {
    id: 76,
    question: 'Which service provides provides a high performance, resizable, and cost-effective in-memory cache, while removing complexity associated with deploying and managing a distributed cache environment. ',
    answer: 'ElastiCache'
  },
  {
    id: 77,
    question: 'Which database service is a fast, reliable, fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets?',
    answer: 'Neptune'
  },
  {
    id: 78,
    question: 'What is the name of a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to efficiently analyze all your data using your existing business intelligence tools?',
    answer: 'Redshift'
  },
  {
    id: 79,
    question: 'What is a main advantage of installing a database on an EC2 instance vs. an on prem. server?',
    answer: 'For EC2, AWS manages the layers below the operating system.'
  },
  {
    id: 80,
    question: 'What is a disadvantage on installing a database on an EC2 instance?',
    answer: "Amazon EC2 isn't a fully managed service. Thus, when you run a database on Amazon EC2, you're more prone to user errors. For example, when you update the operating system or database software manually, you might accidentally cause application downtime. You might spend hours checking every change to identify and fix an issue."
  }
]

export default content

/*  const template = [
    {
    id: 1,
    question: 'question',
    answer: 'answer'
    },
    {
    id: 2,
    type: 'list',
    question: 'question',
    listAnswer: ['a1', 'a2', 'a3']
    }
    ] */
