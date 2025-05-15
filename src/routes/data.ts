export function load() {
  // Mock data for categories and articles
  const categories = [
    {
      name: "Data Engineering",
      articles: [
        {
          slug: "apache-airflow-fundamentals",
          title: "Apache Airflow Fundamentals",
          subtitle: "Building robust data pipelines with Apache Airflow",
          category: "Data Engineering",
          icon: "/images/icons/airflow.svg", // Replace with actual icon path
          updatedAt: "2025-01-15",
          youtube_url: "https://youtube.com/watch?v=example1",
          github: "https://github.com/timnology/airflow-examples"
        },
        {
          slug: "spark-optimization-techniques",
          title: "Spark Optimization Techniques",
          subtitle: "Improving performance in large-scale data processing",
          category: "Data Engineering",
          icon: "/images/icons/spark.svg",
          updatedAt: "2025-02-20",
          youtube_url: "https://youtube.com/watch?v=example2"
        },
        {
          slug: "data-lake-architecture",
          title: "Modern Data Lake Architecture",
          subtitle: "Designing scalable and flexible data lakes",
          category: "Data Engineering",
          icon: "/images/icons/data-lake.svg",
          updatedAt: "2025-03-05",
          github: "https://github.com/timnology/data-lake-examples"
        }
      ]
    },
    {
      name: "Cloud Infrastructure",
      articles: [
        {
          slug: "terraform-best-practices",
          title: "Terraform Best Practices",
          subtitle: "Infrastructure as code patterns for maintainable systems",
          category: "Cloud Infrastructure",
          icon: "/images/icons/terraform.svg",
          updatedAt: "2025-01-10",
          youtube_url: "https://youtube.com/watch?v=example3",
          github: "https://github.com/timnology/terraform-patterns"
        },
        {
          slug: "kubernetes-monitoring",
          title: "Kubernetes Monitoring Setup",
          subtitle: "Comprehensive monitoring and alerting for Kubernetes clusters",
          category: "Cloud Infrastructure",
          icon: "/images/icons/kubernetes.svg",
          updatedAt: "2025-02-12",
          youtube_url: "https://youtube.com/watch?v=example4"
        },
        {
          slug: "aws-serverless-architecture",
          title: "AWS Serverless Architecture",
          subtitle: "Building event-driven applications with AWS Lambda and related services",
          category: "Cloud Infrastructure",
          icon: "/images/icons/aws.svg",
          updatedAt: "2025-03-18"
        }
      ]
    },
    {
      name: "Software Development",
      articles: [
        {
          slug: "type-safe-apis-typescript",
          title: "Type-safe APIs with TypeScript",
          subtitle: "Creating robust APIs with end-to-end type safety",
          category: "Software Development",
          icon: "/images/icons/typescript.svg",
          updatedAt: "2025-01-22",
          youtube_url: "https://youtube.com/watch?v=example5",
          github: "https://github.com/timnology/type-safe-api-examples"
        },
        {
          slug: "testing-strategies-microservices",
          title: "Testing Strategies for Microservices",
          subtitle: "Comprehensive approaches to testing distributed systems",
          category: "Software Development",
          icon: "/images/icons/testing.svg",
          updatedAt: "2025-02-28",
          youtube_url: "https://youtube.com/watch?v=example6"
        },
        {
          slug: "svelte-reactivity-explained",
          title: "Svelte Reactivity Explained",
          subtitle: "Deep dive into Svelte's reactivity system and component lifecycle",
          category: "Software Development",
          icon: "/images/icons/svelte.svg",
          updatedAt: "2025-03-25",
          github: "https://github.com/timnology/svelte-reactivity-demos"
        }
      ]
    },
    {
      name: "Machine Learning",
      articles: [
        {
          slug: "ml-ops-pipeline",
          title: "Building an ML Ops Pipeline",
          subtitle: "End-to-end machine learning operations for production",
          category: "Machine Learning",
          icon: "/images/icons/mlops.svg",
          updatedAt: "2025-01-05",
          youtube_url: "https://youtube.com/watch?v=example7",
          github: "https://github.com/timnology/ml-ops-pipeline"
        },
        {
          slug: "deep-learning-computer-vision",
          title: "Deep Learning for Computer Vision",
          subtitle: "Implementing and optimizing convolutional neural networks",
          category: "Machine Learning",
          icon: "/images/icons/vision.svg",
          updatedAt: "2025-02-15",
          youtube_url: "https://youtube.com/watch?v=example8"
        }
      ]
    }
  ];

  return {
    categories
  };
}
