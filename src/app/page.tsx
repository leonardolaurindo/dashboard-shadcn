import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Receita Total",
    amount: "R$45.231,89",
    description: "+20,1% acima do mês passado",
    icon: DollarSign
  },
  {
    label: "Inscrições",
    amount: "+2350",
    description: "+180,2% acima do mês passado",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12.234",
    description: "+19% acima do mês passado",
    icon: CreditCard
  },
  {
    label: "Ativos Agora",
    amount: "+573",
    description: "+180,2% acima do mês passado",
    icon: Activity
  },
];

const userSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmout: "R$1.999,00"
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    saleAmout: "R$1.999,00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmout: "R$39,00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmout: "R$299,00"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
      sm:grid-cols-2
      xl:grid-cols-4">
        {cardData.map((d, i) =>
          <Card
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        )}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all
      lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Vendas Recentes</p>
            <p className="text-sm text-gray-400">Você fez 265 vendas esse mês</p>
          </section>
          {userSalesData.map((d, i) => (
            <SalesCard key={i}
              email={d.email}
              name={d.name}
              saleAmout={d.saleAmout}
            />
          ))}
        </CardContent>
        {/*  */}

      </section>
    </div>
  );
}
