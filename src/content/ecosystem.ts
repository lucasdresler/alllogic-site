// Conteúdo da seção de Ecossistema de Infraestrutura e Parcerias Homologadas.

export interface EcosystemPillar {
  title: string;
  badge: string;
  description: string;
  tags: string[];
}

export interface EcosystemContent {
  eyebrow: string;
  title: string;
  description: string;
  pillars: EcosystemPillar[];
}

export const ecosystemContent: EcosystemContent = {
  eyebrow: "Infraestrutura & Alianças",
  title: "A solidez técnica que sustenta as nossas operações.",
  description:
    "Combinamos engenharia própria a padrões e infraestruturas líderes mundiais em disponibilidade, segurança e conformidade regulatória.",
  pillars: [
    {
      title: "Meta / WhatsApp Cloud API Oficial",
      badge: "WhatsApp Oficial 24/7",
      description:
        "Conexão certificada via API oficial da Meta, garantindo alta taxa de entrega, resposta instantânea e proteção total contra banimentos de número.",
      tags: ["API Oficial", "Zero Risco de Banimento", "Criptografia"],
    },
    {
      title: "Oracle Cloud Infrastructure (OCI)",
      badge: "Nuvem Corporativa",
      description:
        "Ambientes dedicados em nuvem de alto desempenho, assegurando baixa latência, disponibilidade ininterrupta e escalabilidade elástica para aplicações críticas.",
      tags: ["Alta Disponibilidade", "SLA 99.9%", "Servidores Dedicados"],
    },
    {
      title: "Cloudflare Global Network",
      badge: "Segurança & Performance",
      description:
        "Rede de distribuição de conteúdo com proteção avançada contra ataques DDoS, terminação SSL/TLS de ponta e tempo de resposta ultrarrápido.",
      tags: ["Proteção DDoS", "Certificados SSL", "Edge Cache"],
    },
    {
      title: "Asaas Gestão Financeira",
      badge: "Instituição de Pagamento",
      description:
        "Infraestrutura de cobrança regulamentada pelo Banco Central do Brasil, viabilizando o Agillex Pay com taxa fixa de R$ 1,99 e liquidação segura via Pix e Cartão.",
      tags: ["Regulado BACEN", "Split de Pagamentos", "Pix Instantâneo"],
    },
    {
      title: "PostgreSQL & Docker Enterprise",
      badge: "Bancos e Containers",
      description:
        "Arquitetura de dados transacional com isolamento rigoroso por empresa (multi-tenant), backups automatizados e conformidade estrita com a LGPD.",
      tags: ["Isolamento Multi-Tenant", "Backups Contínuos", "LGPD"],
    },
  ],
};
