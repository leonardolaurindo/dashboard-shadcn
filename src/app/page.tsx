import CardInfo from "@/components/Cards";
import { CardContent, CardDebit, CardDebitProps, CardParcels, CardParcelsProps, CardProps } from "@/components/Cards";
import PageTitle from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, CalendarDays, HandCoins, TrendingDown, TrendingUp } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Receitas",
    amount: "+ R$548,32",
    description: "aumento de 0,8%",
    icon: TrendingUp,
    style: "shadow-green-600/30",
    color: "text-green-600",
  },
  {
    label: "Despesas",
    amount: "- R$ 784,35",
    description: "3,2% total de receitas",
    icon: TrendingDown,
    style: "shadow-rose-700/30",
    color: "text-rose-700"
  },
  {
    label: "Total de Dividas",
    amount: "R$ 3.874,52",
    description: "uma diminuição de 10%",
    icon: CreditCard,
    style: "shadow-hunas/30",
    color: "text-hunas"
  },
  {
    label: "Mais um Card",
    amount: "+00",
    description: "+00,0% mais um dado",
    icon: Activity,
    style: "shadow-hunas/30",
    color: "text-hunas"
  },
];

const userDebidData: CardDebitProps[] = [
  {
    title: "Nome da Divida",
    icon: CreditCard,
    contractedValue: "R$ 30.000,00",
    parcelValue: "R$ 879,32",
    remaningValue: "13.400,32",
    totalMonth: 46,
    remainingMonths: 19,
    feesRate: "1,75%",
    amortSystem: "SAC",
    totalFees: "R$ 38,574,42"
  },
  {
    title: "Nome da Divida",
    icon: CreditCard,
    contractedValue: "R$ 30.000,00",
    parcelValue: "R$ 879,32",
    remaningValue: "13.400,32",
    totalMonth: 46,
    remainingMonths: 19,
    feesRate: "1,75%",
    amortSystem: "SAC",
    totalFees: "R$ 38,574,42"
  }

]



const parcelsData: CardParcelsProps[] = [
  {
    debtName: "Financiamento Casa Teste Nome grande",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48
  },
  {
    debtName: "Financiamento Moto",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48
  },
  {
    debtName: "Viagem",
    debtValue: 387.37,
    debtMonth: 12,
    remaningMonth: 48
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
      sm:grid-cols-2
      xl:grid-cols-4">
        {cardData.map((d, i) =>
          <CardInfo
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
            style={d.style}
            color={d.color}
          />
        )}
      </section>
      <section className="grid grid-cols-1 gap-4 pt-5
      lg:grid-cols-3">

        <div className="col-span-2">
          {userDebidData.map((d, i) => (
            <CardDebit key={i}
              title={d.title}
              icon={d.icon}
              contractedValue={d.contractedValue}
              parcelValue={d.parcelValue}
              remaningValue={d.remaningValue}
              totalMonth={d.totalMonth}
              remainingMonths={d.remainingMonths}
              feesRate={d.feesRate}
              amortSystem={d.amortSystem}
              totalFees={d.totalFees}
            />
          ))}
        </div>

        <CardContent className="shadow-lg shadow-black/25">
          <p className="font-semibold pl-2">Proximas parcelas</p>
          {parcelsData.map((d, i) =>
            <CardParcels
              key={i}
              debtName={d.debtName}
              debtValue={d.debtValue}
              debtMonth={d.debtMonth}
              remaningMonth={d.remaningMonth}
            />
          )}
        </CardContent>
      </section>

    </div>
  );
}
