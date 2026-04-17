import React from 'react';

const slides = [
  {
    title: 'Không gian sống xanh và ổn định',
    desc: 'My Home hướng tới một môi trường sống phù hợp cho học sinh, sinh viên và người đi làm đang cần sự an tâm để học tập và phát triển.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Cộng đồng có định hướng phát triển',
    desc: 'Mỗi không gian được xây dựng để tạo nề nếp sống văn minh, kết nối và tôn trọng giá trị của từng cá nhân trong cộng đồng.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Thương hiệu gắn với tinh thần nuôi dưỡng',
    desc: 'Màu xanh và vàng trong nhận diện thể hiện sự bền vững, niềm tin và tinh thần kiến tạo môi trường sống tốt hơn mỗi ngày.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
  },
];

const facilities = [
  {
    id: 1,
    name: 'Cơ sở My Home Thủ Đức',
    address: '12 Đường số 8, Linh Trung, Thủ Đức, TP.HCM',
    audience: 'Phù hợp cho sinh viên các trường khu Đại học Quốc gia.',
    preview: 'Không gian yên tĩnh, gần trường học, thuận tiện cho việc học tập và sinh hoạt hằng ngày.',
    detail:
      'Cơ sở này có khu sinh hoạt chung, khu để xe, camera an ninh và các phòng được bố trí tối ưu cho sinh viên cần môi trường ổn định.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 2,
    name: 'Cơ sở My Home Dĩ An',
    address: '45 Nguyễn An Ninh, Dĩ An, Bình Dương',
    audience: 'Phù hợp cho sinh viên và người đi làm trẻ cần vị trí linh hoạt.',
    preview: 'Thiết kế hiện đại, nhiều ánh sáng tự nhiên và kết nối nhanh tới các tuyến giao thông chính.',
    detail:
      'Cơ sở có không gian sống xanh, hành lang rộng, khu vực giặt phơi riêng và định hướng cộng đồng văn minh cho người trẻ.',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 3,
    name: 'Cơ sở My Home Gò Vấp',
    address: '88 Phan Văn Trị, Gò Vấp, TP.HCM',
    audience: 'Phù hợp cho người đi làm cần chỗ ở gần trung tâm và thuận tiện di chuyển.',
    preview: 'Không gian gọn gàng, riêng tư và chú trọng cảm giác an tâm sau giờ làm việc.',
    detail:
      'Cơ sở này ưu tiên nhóm khách đi làm, có nội quy rõ ràng, lối đi sạch sẽ và khu vực tiếp khách nhỏ ở tầng trệt.',
    images: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 4,
    name: 'Cơ sở My Home Bình Thạnh',
    address: '102 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP.HCM',
    audience: 'Phù hợp cho sinh viên và nhân sự văn phòng khu trung tâm.',
    preview: 'Vị trí kết nối thuận lợi, không gian sống văn minh và thuận tiện cho nhịp sống bận rộn.',
    detail:
      'Tại đây, My Home tập trung vào trải nghiệm ổn định lâu dài với hệ thống quản lý gọn gàng và khu vực chung được duy trì thường xuyên.',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 5,
    name: 'Cơ sở My Home Quận 7',
    address: '27 Nguyễn Thị Thập, Quận 7, TP.HCM',
    audience: 'Phù hợp cho người đi làm cần môi trường sống sạch, chỉn chu và yên tĩnh.',
    preview: 'Thiết kế theo hướng tối giản, hiện đại và dễ tạo cảm giác nghỉ ngơi sau giờ làm.',
    detail:
      'Cơ sở có khu vực để xe rộng, hệ thống ánh sáng tốt và phong cách vận hành phù hợp với người ở lâu dài.',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 6,
    name: 'Cơ sở My Home Tân Bình',
    address: '16 Cộng Hòa, Tân Bình, TP.HCM',
    audience: 'Phù hợp cho người đi làm cần thuận tiện di chuyển giữa các quận.',
    preview: 'Không gian thực tế, dễ tiếp cận và phù hợp với người cần chỗ ở ổn định gần nơi làm việc.',
    detail:
      'My Home định hướng cơ sở này như một điểm ở thực dụng nhưng vẫn duy trì tiêu chuẩn sạch, an toàn và tôn trọng cộng đồng cư trú.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 7,
    name: 'Cơ sở My Home Quận 9',
    address: '61 Lê Văn Việt, Quận 9, TP.HCM',
    audience: 'Phù hợp cho sinh viên và kỹ sư trẻ đang học tập, làm việc tại khu công nghệ cao.',
    preview: 'Bố cục phòng tối ưu cho sinh hoạt cá nhân và duy trì nhịp sống tập trung.',
    detail:
      'Cơ sở này nhấn mạnh yếu tố ổn định, riêng tư và tạo điều kiện cho người ở duy trì thời gian biểu học tập, làm việc đều đặn.',
    images: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 8,
    name: 'Cơ sở My Home Phú Nhuận',
    address: '33 Phan Xích Long, Phú Nhuận, TP.HCM',
    audience: 'Phù hợp cho người đi làm yêu cầu môi trường sống gọn gàng và có tính kết nối cao.',
    preview: 'Không gian cân bằng giữa riêng tư cá nhân và khu vực sinh hoạt chung vừa đủ.',
    detail:
      'Đây là cơ sở có phong cách trẻ, sạch và gần nhiều tiện ích xung quanh, phù hợp với người làm việc tại khu nội thành.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 9,
    name: 'Cơ sở My Home Bình Dương',
    address: '120 Đại lộ Bình Dương, Thuận An, Bình Dương',
    audience: 'Phù hợp cho người lao động trẻ và nhân sự văn phòng tại các khu vực lân cận.',
    preview: 'Khuôn viên rộng, cảm giác thông thoáng và phù hợp cho việc ở lâu dài.',
    detail:
      'Cơ sở được phát triển với trọng tâm là vận hành bền vững, môi trường ngăn nắp và hỗ trợ người ở an tâm trong sinh hoạt hằng ngày.',
    images: [
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 10,
    name: 'Cơ sở My Home Biên Hòa',
    address: '9 Võ Thị Sáu, Biên Hòa, Đồng Nai',
    audience: 'Phù hợp cho sinh viên và người đi làm tại khu vực Đồng Nai.',
    preview: 'Mô hình cơ sở chú trọng tính ổn định, sạch sẽ và thuận tiện cho sinh hoạt thường nhật.',
    detail:
      'Đây là cơ sở có định hướng phục vụ cả người học và người đi làm, với tiêu chuẩn quản lý rõ ràng và cộng đồng cư trú thân thiện.',
    images: [
      'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    ],
  },
];

const contacts = [
  {
    label: 'Địa chỉ',
    value: 'My Home, không gian sống dành cho học sinh, sinh viên và người đi làm',
  },
  {
    label: 'Điện thoại',
    value: '0900 123 456',
  },
  {
    label: 'Email',
    value: 'contact@myhome.vn',
  },
  {
    label: 'Thông điệp',
    value: 'Nơi kiến tạo môi trường cho học sinh, sinh viên và người đi làm',
  },
];

const socialChannels = [
  {
    label: 'Messenger',
    value: 'Nhắn tin qua Messenger',
    href: 'https://m.me/myhome.admin',
  },
  {
    label: 'Zalo',
    value: 'Chat với admin qua Zalo',
    href: 'https://zalo.me/0900123456',
  },
  {
    label: 'Email',
    value: 'Gửi email đến admin',
    href: 'mailto:contact@myhome.vn',
  },
  {
    label: 'Điện thoại',
    value: 'Gọi trực tiếp cho admin',
    href: 'tel:0900123456',
  },
];

const centerActivities = [
  {
    title: 'Trao học bổng cho sinh viên',
    desc: 'Chương trình ghi nhận và hỗ trợ các bạn sinh viên có tinh thần vươn lên trong học tập và cuộc sống.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80',
    tag: 'Hỗ trợ học tập',
  },
  {
    title: 'Du lịch đầu năm',
    desc: 'Hoạt động kết nối cộng đồng cư dân đầu năm nhằm tạo năng lượng tích cực, gắn kết và khởi đầu hành trình mới.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    tag: 'Kết nối cộng đồng',
  },
  {
    title: 'Các buổi thuyết trình nội bộ',
    desc: 'Tự tổ chức các buổi chia sẻ, thuyết trình và rèn luyện kỹ năng giao tiếp cho học sinh, sinh viên và người đi làm.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    tag: 'Phát triển kỹ năng',
  },
  {
    title: 'Sinh hoạt định hướng đầu tháng',
    desc: 'Các buổi gặp mặt đầu tháng để cập nhật kế hoạch, chia sẻ nề nếp sinh hoạt và tạo sự kết nối giữa các thành viên mới và cũ.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80',
    tag: 'Sinh hoạt cộng đồng',
  },
  {
    title: 'Ngày sống xanh tại My Home',
    desc: 'Hoạt động khuyến khích cư dân tham gia dọn dẹp, phân loại rác và cùng xây dựng môi trường sống sạch, gọn và có trách nhiệm hơn.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    tag: 'Chuyển đổi xanh',
  },
  {
    title: 'Chia sẻ kinh nghiệm nghề nghiệp',
    desc: 'Không gian để người đi làm và các anh chị đi trước chia sẻ kinh nghiệm học tập, thực tập và định hướng phát triển cho các bạn trẻ.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    tag: 'Định hướng tương lai',
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const facilitiesPerPage = 3;
  const totalFacilityPages = Math.ceil(facilities.length / facilitiesPerPage);
  const [facilityPage, setFacilityPage] = React.useState(1);
  const [selectedFacilityId, setSelectedFacilityId] = React.useState(facilities[0].id);
  const [currentActivityIndex, setCurrentActivityIndex] = React.useState(0);
  const [isFacilityModalOpen, setIsFacilityModalOpen] = React.useState(false);
  const [isSocialOpen, setIsSocialOpen] = React.useState(false);
  const activityScrollerRef = React.useRef(null);
  const activityLastInteractionRef = React.useRef(Date.now());
  const [facilityPreviewIndexes, setFacilityPreviewIndexes] = React.useState(
    Object.fromEntries(facilities.map((facility) => [facility.id, 0]))
  );

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const paginatedFacilities = facilities.slice(
    (facilityPage - 1) * facilitiesPerPage,
    facilityPage * facilitiesPerPage
  );

  const selectedFacility =
    facilities.find((facility) => facility.id === selectedFacilityId) ?? facilities[0];

  const getPreviewImage = (facility) =>
    facility.images[facilityPreviewIndexes[facility.id] ?? 0] ?? facility.images[0];

  React.useEffect(() => {
    const currentPageContainsSelection = paginatedFacilities.some(
      (facility) => facility.id === selectedFacilityId
    );

    if (!currentPageContainsSelection && paginatedFacilities.length > 0) {
      setSelectedFacilityId(paginatedFacilities[0].id);
    }
  }, [facilityPage, paginatedFacilities, selectedFacilityId]);

  React.useEffect(() => {
    if (!isFacilityModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsFacilityModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFacilityModalOpen]);

  React.useEffect(() => {
    const scroller = activityScrollerRef.current;

    if (!scroller) {
      return undefined;
    }

    const handleScroll = () => {
      const nextIndex = Math.round(scroller.scrollLeft / scroller.clientWidth);
      setCurrentActivityIndex(nextIndex);
      activityLastInteractionRef.current = Date.now();
    };

    scroller.addEventListener('scroll', handleScroll, { passive: true });

    return () => scroller.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      const scroller = activityScrollerRef.current;

      if (!scroller) {
        return;
      }

      if (Date.now() - activityLastInteractionRef.current < 2800) {
        return;
      }

      const nextIndex =
        currentActivityIndex >= centerActivities.length - 1 ? 0 : currentActivityIndex + 1;

      scroller.scrollTo({
        left: nextIndex * scroller.clientWidth,
        behavior: 'smooth',
      });
      setCurrentActivityIndex(nextIndex);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [currentActivityIndex]);

  return (
    <div className="min-h-screen bg-[#f7f5ee] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b4f2f_0%,#0f6b3c_55%,#c89a1d_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center text-white">
            <div className="mb-5 inline-flex w-fit rounded-full border border-[#f5d978]/35 bg-white/10 px-4 py-2 text-sm tracking-[0.14em] text-[#f8e7a2] backdrop-blur">
              MY HOME
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Nơi kiến tạo môi trường cho học sinh, sinh viên và người đi làm
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/88 md:text-lg">
              Đây là trang giới thiệu tổng quan về My Home, nơi xây dựng môi trường sống có định hướng, có
              giá trị cộng đồng và đồng hành cùng sự phát triển của từng người đang học tập và làm việc.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.18em] text-[#eed47d]">Định hướng</div>
                <div className="mt-2 text-lg font-semibold">Sống có giá trị</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.18em] text-[#eed47d]">Cộng đồng</div>
                <div className="mt-2 text-lg font-semibold">Gắn kết và văn minh</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.18em] text-[#eed47d]">Mục tiêu</div>
                <div className="mt-2 text-lg font-semibold">Phát triển bền vững</div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-[34px] border border-[#f0d57c]/30 bg-white/8 p-4 shadow-[0_24px_80px_rgba(2,34,20,0.35)] backdrop-blur">
              <div className="relative h-[470px] overflow-hidden rounded-[28px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-105'
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,40,24,0.05)_0%,rgba(7,40,24,0.75)_100%)]" />
                    <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                      <div className="inline-flex rounded-full bg-[#f0c94d] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#124226]">
                        Giới thiệu và hình ảnh
                      </div>
                      <h2 className="mt-4 text-3xl font-semibold leading-tight">{slide.title}</h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-emerald-50/90">{slide.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.title}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all ${
                        index === currentSlide ? 'w-9 bg-[#f0c94d]' : 'w-3 bg-white/35'
                      }`}
                      aria-label={`Chuyển đến slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="text-sm font-medium text-emerald-50/80">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f6b3c]">Thông tin cơ sở</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#193422] md:text-5xl">
            Mỗi cơ sở là một không gian sống được giới thiệu bằng thẻ riêng
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
            Dưới đây là 10 cơ sở mẫu của My Home. Mỗi trang hiển thị 3 thẻ, có hình ảnh preview, thông tin
            khái quát và bạn có thể bấm vào từng cơ sở để xem nội dung chi tiết hơn.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {paginatedFacilities.map((item) => (
            <article
              key={item.id}
              onClick={() => {
                setSelectedFacilityId(item.id);
                setIsFacilityModalOpen(true);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedFacilityId(item.id);
                  setIsFacilityModalOpen(true);
                }
              }}
              role="button"
              tabIndex={0}
              className={`group overflow-hidden rounded-[30px] border bg-white text-left shadow-[0_14px_45px_rgba(15,49,29,0.06)] transition hover:-translate-y-1 ${
                selectedFacilityId === item.id
                  ? 'border-[#0f6b3c] ring-2 ring-[#d7ead8]'
                  : 'border-[#dbe5d8]'
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={getPreviewImage(item)}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(10,47,28,0.18)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-3 gap-2 px-4 pb-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.images.map((image, index) => (
                    <span
                      key={`${item.id}-${index}`}
                      role="button"
                      tabIndex={0}
                      onMouseEnter={() =>
                        setFacilityPreviewIndexes((prev) => ({ ...prev, [item.id]: index }))
                      }
                      onFocus={() =>
                        setFacilityPreviewIndexes((prev) => ({ ...prev, [item.id]: index }))
                      }
                      onClick={(event) => {
                        event.stopPropagation();
                        setFacilityPreviewIndexes((prev) => ({ ...prev, [item.id]: index }));
                        setSelectedFacilityId(item.id);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          event.stopPropagation();
                          setFacilityPreviewIndexes((prev) => ({ ...prev, [item.id]: index }));
                          setSelectedFacilityId(item.id);
                        }
                      }}
                      className={`h-14 w-14 overflow-hidden rounded-2xl border-2 bg-white/90 ${
                        (facilityPreviewIndexes[item.id] ?? 0) === index
                          ? 'border-[#f0c94d]'
                          : 'border-white/40'
                      }`}
                    >
                      <img src={image} alt={`${item.name} preview ${index + 1}`} className="h-full w-full object-cover" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-7">
                <div className="inline-flex rounded-full bg-[#eef4eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6b3c]">
                  Preview cơ sở
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#173321]">{item.name}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#215235]">{item.address}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.preview}</p>
                <div className="mt-5 rounded-2xl bg-[#fbfcf8] px-4 py-3 text-sm font-medium leading-7 text-[#215235]">
                  {item.audience}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setFacilityPage((prev) => Math.max(prev - 1, 1))}
            disabled={facilityPage === 1}
            className="rounded-full border border-[#d6e3d3] bg-white px-5 py-2 text-sm font-semibold text-[#1d4d31] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Trang trước
          </button>

          {Array.from({ length: totalFacilityPages }).map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setFacilityPage(page)}
                className={`h-11 w-11 rounded-full text-sm font-semibold transition ${
                  facilityPage === page
                    ? 'bg-[#0f6b3c] text-white'
                    : 'border border-[#d6e3d3] bg-white text-[#1d4d31]'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setFacilityPage((prev) => Math.min(prev + 1, totalFacilityPages))}
            disabled={facilityPage === totalFacilityPages}
            className="rounded-full border border-[#d6e3d3] bg-white px-5 py-2 text-sm font-semibold text-[#1d4d31] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Trang sau
          </button>
        </div>
      </section>

      <section className="bg-[#eef4eb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f6b3c]">
              Hoạt động trong trung tâm
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#193422] md:text-5xl">
              Các hoạt động được tổ chức để tạo nên một cộng đồng sống tích cực
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
              Kéo ngang để xem từng hoạt động. Mỗi lần cuộn sẽ dừng đúng theo từng thẻ và hệ thống sẽ tự chuyển sau vài giây nếu bạn chưa thao tác.
            </p>
          </div>

          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="text-sm font-medium text-[#215235]">
                Hoạt động {currentActivityIndex + 1} / {centerActivities.length}
              </div>
              <div className="text-sm font-medium text-[#215235]/70">Vuốt để xem</div>
            </div>

            <div className="relative">
              {currentActivityIndex > 0 && (
                <>
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-[linear-gradient(90deg,#eef4eb_0%,rgba(238,244,235,0)_100%)]" />
                  <div className="pointer-events-none absolute left-4 top-1/2 z-20 flex -translate-y-1/2 items-center gap-1">
                    <span className="text-3xl font-light text-[#0f6b3c]/35 animate-pulse">‹</span>
                    <span className="text-2xl font-light text-[#0f6b3c]/20 animate-pulse">‹</span>
                  </div>
                </>
              )}
              {currentActivityIndex < centerActivities.length - 1 && (
                <>
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-[linear-gradient(270deg,#eef4eb_0%,rgba(238,244,235,0)_100%)]" />
                  <div className="pointer-events-none absolute right-4 top-1/2 z-20 flex -translate-y-1/2 items-center gap-1">
                    <span className="text-2xl font-light text-[#0f6b3c]/20 animate-pulse">›</span>
                    <span className="text-3xl font-light text-[#0f6b3c]/35 animate-pulse">›</span>
                  </div>
                </>
              )}

              <div
                ref={activityScrollerRef}
                onMouseMove={() => {
                  activityLastInteractionRef.current = Date.now();
                }}
                onTouchStart={() => {
                  activityLastInteractionRef.current = Date.now();
                }}
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
              {centerActivities.map((activity) => (
                <article
                  key={activity.title}
                  className="min-w-full snap-center overflow-hidden rounded-[32px] border border-[#d8e2d3] bg-white shadow-[0_14px_45px_rgba(15,49,29,0.06)]"
                >
                  <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative h-72 overflow-hidden md:h-96">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(10,47,28,0.18)_100%)]" />
                    </div>

                    <div className="flex flex-col justify-center p-7 md:p-10">
                      <div className="inline-flex w-fit rounded-full bg-[#eef4eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6b3c]">
                        {activity.tag}
                      </div>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#173321] md:text-4xl">
                        {activity.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                        {activity.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[34px] bg-[linear-gradient(180deg,#113a24_0%,#0f6b3c_100%)] p-8 text-white shadow-[0_18px_70px_rgba(8,42,24,0.18)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#edd477]">Thông tin liên hệ</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Kết nối với My Home để tìm hiểu thêm về định hướng và cộng đồng
            </h2>
            <p className="mt-5 text-base leading-8 text-emerald-50/85">
              Nếu bạn muốn tìm hiểu thêm về mô hình hoạt động, các chương trình đã triển khai hoặc hướng phát
              triển của My Home, hãy liên hệ qua thông tin bên cạnh.
            </p>
          </div>

          <div className="rounded-[34px] border border-[#d8e2d3] bg-white p-8 shadow-[0_12px_50px_rgba(15,49,29,0.05)] md:p-10">
            <div className="grid gap-4">
              {contacts.map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#e4ebdf] bg-[#fbfcf8] px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6b3c]">{item.label}</div>
                  <div className="mt-2 text-base leading-7 text-slate-700">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-[#0d4f2e] px-5 py-5 text-sm leading-7 text-emerald-50/90">
              My Home xây dựng hình ảnh của một nơi sống có giá trị, có trách nhiệm và hướng đến sự phát triển bền vững
              cho học sinh, sinh viên và người đi làm.
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isSocialOpen && (
          <div className="w-[280px] rounded-[28px] border border-[#d8e2d3] bg-white p-4 shadow-[0_18px_60px_rgba(8,42,24,0.18)]">
            <div className="px-2 pb-3">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f6b3c]">Mạng xã hội</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Chọn kênh phù hợp để nhắn trực tiếp đến trang admin của My Home.
              </div>
            </div>

            <div className="grid gap-3">
              {socialChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-2xl border border-[#e4ebdf] bg-[#fbfcf8] px-4 py-3 transition hover:border-[#0f6b3c] hover:bg-[#eef4eb]"
                >
                  <div className="text-sm font-semibold text-[#173321]">{channel.label}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{channel.value}</div>
                </a>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsSocialOpen((prev) => !prev)}
          className="rounded-full bg-[linear-gradient(135deg,#0f6b3c_0%,#0b4f2f_100%)] px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(8,42,24,0.28)] transition hover:scale-[1.02]"
        >
          {isSocialOpen ? 'Đóng mạng xã hội' : 'Mạng xã hội'}
        </button>
      </div>

      {isFacilityModalOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-[#062616]/60 px-4 py-6 backdrop-blur-sm"
          onClick={() => setIsFacilityModalOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[36px] bg-[#f7f5ee] shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsFacilityModalOpen(false)}
              className="absolute right-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#173321] shadow"
            >
              Đóng
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#0d4f2e] p-5 md:p-6">
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src={getPreviewImage(selectedFacility)}
                    alt={selectedFacility.name}
                    className="h-[320px] w-full object-cover md:h-[440px]"
                  />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {selectedFacility.images.map((image, index) => (
                    <button
                      key={`${selectedFacility.id}-modal-${index}`}
                      type="button"
                      onClick={() =>
                        setFacilityPreviewIndexes((prev) => ({
                          ...prev,
                          [selectedFacility.id]: index,
                        }))
                      }
                      className={`overflow-hidden rounded-2xl border-2 ${
                        (facilityPreviewIndexes[selectedFacility.id] ?? 0) === index
                          ? 'border-[#f0c94d]'
                          : 'border-white/20'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedFacility.name} chi tiết ${index + 1}`}
                        className="h-24 w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="inline-flex w-fit rounded-full bg-[#eef4eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6b3c]">
                  Chi tiết cơ sở
                </div>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#173321] md:text-4xl">
                  {selectedFacility.name}
                </h3>
                <p className="mt-4 text-base font-medium leading-7 text-[#215235]">
                  {selectedFacility.address}
                </p>
                <p className="mt-5 text-base leading-8 text-slate-700">{selectedFacility.preview}</p>
                <p className="mt-4 text-base leading-8 text-slate-700">{selectedFacility.detail}</p>
                <div className="mt-6 rounded-3xl bg-white px-5 py-4 text-sm leading-7 text-[#215235] shadow-[0_10px_30px_rgba(15,49,29,0.06)]">
                  {selectedFacility.audience}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
