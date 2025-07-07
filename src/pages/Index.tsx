import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  const [radarSweep, setRadarSweep] = useState(0);

  const flights = [
    {
      id: "SU-1234",
      status: "В полете",
      altitude: "10,500м",
      speed: "850 км/ч",
      destination: "Москва",
    },
    {
      id: "AFL-567",
      status: "Заход на посадку",
      altitude: "1,200м",
      speed: "320 км/ч",
      destination: "Сочи",
    },
    {
      id: "ROT-890",
      status: "Взлет",
      altitude: "800м",
      speed: "280 км/ч",
      destination: "Казань",
    },
    {
      id: "UTR-234",
      status: "Ожидание",
      altitude: "0м",
      speed: "0 км/ч",
      destination: "Санкт-Петербург",
    },
  ];

  const metrics = [
    { label: "Активных рейсов", value: 247, icon: "Plane" },
    { label: "Взлетов сегодня", value: 89, icon: "TrendingUp" },
    { label: "Посадок сегодня", value: 94, icon: "TrendingDown" },
    { label: "Загрузка полос", value: 78, icon: "Activity" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRadarSweep((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Plane" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  Центр управления авиацией
                </h1>
                <p className="text-slate-400">Мониторинг в реальном времени</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="outline"
                className="border-green-500 text-green-400"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Система активна
              </Badge>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Icon
                      name={metric.icon}
                      size={24}
                      className="text-blue-400"
                    />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{metric.label}</p>
                    <p className="text-2xl font-bold text-white">
                      {metric.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Radar Display */}
          <Card className="lg:col-span-2 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Radar" size={20} className="text-blue-400" />
                <span>Радар</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square bg-slate-900/50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 relative">
                    {/* Radar Grid */}
                    <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full"></div>
                    <div className="absolute inset-4 border border-blue-500/20 rounded-full"></div>
                    <div className="absolute inset-8 border border-blue-500/20 rounded-full"></div>
                    <div className="absolute inset-12 border border-blue-500/20 rounded-full"></div>

                    {/* Crosshairs */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-500/30"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/30"></div>

                    {/* Radar Sweep */}
                    <div
                      className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-blue-500 to-transparent origin-left"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${radarSweep}deg)`,
                      }}
                    ></div>

                    {/* Aircraft Icons */}
                    <div className="absolute top-8 left-20 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-16 right-12 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 left-16 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-12 right-20 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Radar Display Image */}
                <div className="absolute bottom-4 right-4 opacity-50">
                  <img
                    src="/img/43356459-cb00-4f19-a83e-42dd374231fa.jpg"
                    alt="Aviation Control Center"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight Information */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Navigation" size={20} className="text-blue-400" />
                <span>Активные рейсы</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {flights.map((flight) => (
                  <div
                    key={flight.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${
                      selectedFlight === flight.id
                        ? "border-blue-500 bg-blue-500/20"
                        : "border-slate-600 bg-slate-700/50 hover:bg-slate-700"
                    }`}
                    onClick={() => setSelectedFlight(flight.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white">{flight.id}</span>
                      <Badge
                        variant={
                          flight.status === "В полете" ? "default" : "secondary"
                        }
                        className={
                          flight.status === "В полете"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }
                      >
                        {flight.status}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-slate-400">
                      <p>Высота: {flight.altitude}</p>
                      <p>Скорость: {flight.speed}</p>
                      <p>Направление: {flight.destination}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flight Path Progress */}
        <Card className="mt-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Route" size={20} className="text-blue-400" />
              <span>Траектория полета</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {flights.slice(0, 2).map((flight, index) => (
                <div key={flight.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      {flight.id} → {flight.destination}
                    </span>
                    <span className="text-sm text-slate-400">
                      {Math.floor(Math.random() * 40 + 60)}% завершено
                    </span>
                  </div>
                  <Progress
                    value={Math.floor(Math.random() * 40 + 60)}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
