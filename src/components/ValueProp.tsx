import Icon from "@/components/ui/icon";

const ValueProp = () => {
  const items = [
    {
      icon: "UserPlus",
      title: "Приглашаете клиентов",
      description: "Рекомендуете карты и продукты Z-Bank друзьям и подписчикам",
    },
    {
      icon: "CreditCard",
      title: "Они открывают счёт",
      description: "Оформляют карту, вклад или кредит и пользуются банком каждый день",
    },
    {
      icon: "Wallet",
      title: "Вы получаете доход",
      description: "Начисляем вознаграждение за каждого активного клиента — автоматически",
    },
  ];

  return (
    <section id="value" className="py-20 sm:py-28 px-6 bg-snow">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tighter mb-4">
          Они открывают счёт — вы зарабатываете
        </h2>
        <p className="text-lg sm:text-xl text-graphite mb-12 sm:mb-16 max-w-2xl mx-auto tracking-tight">
          Приводите клиентов в Z-Bank: они оформляют карты и продукты банка, а вы
          получаете вознаграждение за их активность
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-fog rounded-[28px] p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-azure rounded-[20px] flex items-center justify-center mx-auto mb-6">
                <Icon name={item.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-ink tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-graphite leading-relaxed tracking-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;