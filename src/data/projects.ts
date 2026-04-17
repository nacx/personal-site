export interface Project {
  name: string;
  url: string;
  description: string;
  role: string;
}

export const PROJECTS: Project[] = [
  {
    name: "envoyproxy/ai-gateway",
    url: "https://github.com/envoyproxy/ai-gateway",
    description:
      "Open-source platform that uses Envoy Gateway to manage traffic between applications and generative AI services. Implements a two-tier gateway architecture for authentication, routing, rate limiting, and fine-grained control over AI model access, with support for OpenAI, Google Gemini, AWS Bedrock, and Anthropic.",
    role: "Maintainer",
  },
  {
    name: "tetratelabs/built-on-envoy",
    url: "https://github.com/tetratelabs/built-on-envoy",
    description:
      "A developer toolkit and community-driven marketplace designed to simplify the process of extending the Envoy Proxy with Dynamic Modules.",
    role: "Owner",
  },
  {
    name: "envoyproxy/ratelimit",
    url: "https://github.com/envoyproxy/ratelimit",
    description:
      "Go/gRPC service that provides generic rate limiting for applications of different types, designed to work alongside Envoy Proxy.",
    role: "Contributor",
  },
  {
    name: "istio-ecosystem/authservice",
    url: "https://github.com/istio-ecosystem/authservice",
    description:
      "Envoy External Authorization implementation that handles OIDC-based authentication and authorization for Istio and Kubernetes environments by delegating auth logic to the service mesh layer. Eliminates per-application authentication code while supporting fine-grained URL path protection, session management, and multiple OIDC providers.",
    role: "Owner",
  },
  {
    name: "apache/jclouds",
    url: "https://github.com/apache/jclouds",
    description:
      "Multi-cloud Java toolkit that provides a unified interface for interacting with different cloud platforms, enabling developers to build portable applications across clouds. Supports key cloud services including compute, blob storage, and load balancing, while allowing full access to provider-specific features.",
    role: "PMC Member",
  },
];
