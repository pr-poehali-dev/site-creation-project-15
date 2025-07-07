import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          AVIATION CONTROL CENTER
        </h1>
        <p className="text-gray-600">DESIGN SYSTEM COMPONENTS</p>
      </div>

      {/* Color Palette */}
      <div className="mb-8">
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-full"></div>
            <div className="text-sm">
              <div className="font-medium">#1a1a1a</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#4299e1] rounded-full"></div>
            <div className="text-sm">
              <div className="font-medium">#4299e1</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#e53e3e] rounded-full"></div>
            <div className="text-sm">
              <div className="font-medium">#e53e3e</div>
            </div>
          </div>
        </div>
      </div>

      {/* Font Specimens */}
      <div className="mb-8 flex space-x-4">
        <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
          <span className="font-normal text-lg">Roboto (Large)</span>
        </div>
        <div className="px-4 py-2 bg-[#4299e1] text-white rounded-lg">
          <span className="font-normal text-base">Roboto (medium)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flight Plan Card */}
        <Card className="border-2 border-gray-300 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black">
              Flight Plan
            </CardTitle>
            <p className="text-gray-600">Description</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Radar Display */}
              <div className="relative w-full h-64 bg-gray-50 rounded-lg border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 relative">
                    {/* Radar Circles */}
                    <div className="absolute inset-0 border-2 border-[#4299e1] rounded-full opacity-60"></div>
                    <div className="absolute inset-4 border border-[#4299e1] rounded-full opacity-40"></div>
                    <div className="absolute inset-8 border border-[#4299e1] rounded-full opacity-30"></div>
                    <div className="absolute inset-12 border border-[#4299e1] rounded-full opacity-20"></div>

                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#e53e3e] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

                    {/* Aircraft Icons */}
                    <Icon
                      name="Plane"
                      size={16}
                      className="absolute top-4 left-8 text-[#1a1a1a] transform rotate-45"
                    />
                    <Icon
                      name="Plane"
                      size={16}
                      className="absolute top-8 right-6 text-[#1a1a1a] transform rotate-12"
                    />
                    <Icon
                      name="Plane"
                      size={16}
                      className="absolute bottom-6 left-6 text-[#1a1a1a] transform rotate-90"
                    />

                    {/* Flight paths */}
                    <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-[#4299e1] transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-[#4299e1] transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                    <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-[#4299e1] transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
                  </div>
                </div>
              </div>

              {/* Flight Path Lines */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-0.5 bg-[#4299e1]"></div>
                  <div className="w-6 h-0.5 bg-[#4299e1]"></div>
                  <div className="w-4 h-0.5 bg-[#4299e1]"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-0.5 bg-[#4299e1]"></div>
                  <div className="w-3 h-0.5 bg-[#4299e1]"></div>
                  <div className="w-7 h-0.5 bg-[#4299e1]"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-0.5 bg-[#4299e1]"></div>
                  <div className="w-8 h-0.5 bg-[#4299e1]"></div>
                  <div className="w-2 h-0.5 bg-[#4299e1]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Showcase */}
        <div className="space-y-6">
          {/* Aviation Blue Button */}
          <Card className="border border-gray-300 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Button className="bg-[#4299e1] text-white hover:bg-[#3182ce] px-4 py-2 rounded">
                    Button
                  </Button>
                  <span className="text-xl font-bold text-black">
                    Aviation Blue
                  </span>
                </div>
                <div className="text-black font-medium">Title</div>
                <div className="text-gray-600">Description</div>
              </div>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                Secondary
              </Button>
            </div>
          </Card>

          {/* Flight Plan Card Component */}
          <Card className="border border-gray-300 bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                  <Icon name="Plane" size={24} className="text-[#1a1a1a]" />
                </div>
                <div>
                  <div className="text-black font-bold text-lg">
                    Flight Plan Card
                  </div>
                  <div className="text-gray-600">Description</div>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                BUTTON
              </Button>
            </div>
          </Card>

          {/* Flight Path Component */}
          <Card className="border border-gray-300 bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#4299e1] rounded-full"></div>
                  </div>
                </div>
                <div className="text-black font-medium">Flight Path</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-100 rounded border border-gray-300 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <div className="w-16 h-0.5 bg-gray-300 border-dashed border-t"></div>
                <div className="w-8 h-8 bg-gray-100 rounded border border-gray-300 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#4299e1] rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Progress Bar */}
          <Card className="border border-gray-300 bg-white p-6">
            <div className="flex items-center space-x-4">
              <Icon name="BarChart3" size={20} className="text-[#1a1a1a]" />
              <div className="flex-1">
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Color Gradient Bar */}
      <div className="mt-8 h-8 bg-gradient-to-r from-[#1a1a1a] via-[#4299e1] to-[#87ceeb] rounded"></div>
    </div>
  );
};

export default Index;
