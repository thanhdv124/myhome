import React from 'react';

export default function App() {
  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
      title: 'Phòng trọ sạch sẽ, riêng tư, sẵn sàng dọn vào ở',
      desc: 'Không gian sống hiện đại, tối ưu cho sinh viên và người đi làm tại thành phố.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
      title: 'Nội thất đầy đủ, tiết kiệm thời gian và chi phí',
      desc: 'Giường, tủ, máy lạnh, khu bếp gọn gàng và khu vực sinh hoạt tiện nghi.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
      title: 'Vị trí thuận tiện, an ninh, phù hợp nhịp sống bận rộn',
      desc: 'Gần chợ, bến xe, cửa hàng tiện lợi và các tuyến đường chính.',
    },
  ];

  const features = [
    {
      title: 'Không gian thoáng và sạch',
      text: 'Thiết kế tối giản, nhiều ánh sáng, tạo cảm giác dễ chịu sau một ngày dài học tập và làm việc.',
    },
    {
      title: 'Chi phí minh bạch',
      text: 'Giá thuê rõ ràng, dễ lựa chọn theo ngân sách, phù hợp với người trẻ cần sự ổn định.',
    },
    {
      title: 'Tiện ích đầy đủ',
      text: 'Khu để xe, wifi, camera an ninh, giờ giấc linh hoạt và môi trường sống văn minh.',
    },
    {
      title: 'Hỗ trợ nhanh chóng',
      text: 'Đội ngũ tư vấn phản hồi nhanh, giúp bạn tìm được phòng phù hợp trong thời gian ngắn.',
    },
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-2 lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center text-white">
            <div className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              MyHome • Giải pháp tìm phòng trọ dễ dàng và đáng tin cậy
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
              Tìm phòng trọ phù hợp, sống tiện nghi hơn cùng MyHome
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-200 md:text-lg">
              Landing page được thiết kế để thu hút người thuê bằng hình ảnh nổi bật, thông tin rõ ràng và lời kêu gọi hành động mạnh mẽ. Phù hợp để quảng bá phòng trọ hiện đại, sạch sẽ và an toàn.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5">
                Xem phòng ngay
              </button>
              <button className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Nhận tư vấn miễn phí
              </button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">100+</div>
                <div>Phòng đang được quan tâm</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div>Hỗ trợ tư vấn</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">3 bước</div>
                <div>Đặt lịch xem nhanh</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <div className="relative h-[480px] overflow-hidden rounded-[22px] bg-slate-200">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-semibold">{slides[current].title}</h2>
                  <p className="mt-2 max-w-lg text-sm text-slate-200">{slides[current].desc}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all ${
                        current === index ? 'w-8 bg-white' : 'w-3 bg-white/40'
                      }`}
                      aria-label={`Chuyển đến ảnh ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={goToPrev}
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    Trước
                  </button>
                  <button
                    onClick={goToNext}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
                  >
                    Sau
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Giới thiệu</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Một landing page bán phòng trọ cần điều gì?</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Để thuyết phục khách thuê, landing page không chỉ cần đẹp mà còn phải truyền tải cảm giác tin cậy. Phần mở đầu cần gây ấn tượng bằng hình ảnh thực tế, thông điệp rõ ràng và lợi ích nổi bật. Sau đó là khu vực mô tả tiện ích, vị trí, giá thuê và quy trình đặt lịch xem phòng.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-white shadow" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Bài viết quảng bá</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Mẫu nội dung giới thiệu phòng trọ MyHome</h2>
            <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-base leading-8 text-slate-700">
                Bạn đang tìm một nơi ở vừa tiện nghi, vừa an toàn, lại có mức giá hợp lý? MyHome mang đến giải pháp phòng trọ hiện đại dành cho sinh viên, nhân viên văn phòng và người trẻ đang tìm kiếm một không gian sống ổn định giữa thành phố.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Với thiết kế sạch sẽ, nội thất đầy đủ và vị trí thuận tiện, mỗi phòng tại MyHome đều được tối ưu để bạn có thể dọn vào ở ngay mà không cần chuẩn bị quá nhiều. Không gian riêng tư, hệ thống an ninh tốt cùng môi trường sống văn minh giúp bạn yên tâm học tập, làm việc và nghỉ ngơi.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Không chỉ là một chỗ ở, MyHome hướng đến trải nghiệm sống thoải mái và lâu dài. Từ quy trình tư vấn nhanh chóng, đặt lịch xem dễ dàng đến chính sách rõ ràng, mọi thứ đều được xây dựng để giúp bạn tìm phòng nhanh hơn và đưa ra quyết định dễ hơn.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Hãy khám phá ngay những phòng trọ phù hợp với nhu cầu của bạn tại MyHome và bắt đầu cuộc sống mới trong một không gian gọn gàng, tiện nghi và đáng tin cậy.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-semibold">Điểm nhấn thuyết phục khách thuê</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <li>• Hình ảnh thật, sáng rõ, tạo cảm giác đáng tin cậy.</li>
                <li>• Tiêu đề nêu đúng lợi ích: tiện nghi, sạch, an toàn, dễ di chuyển.</li>
                <li>• Có cụm thông tin nhanh về giá, diện tích, nội thất và tiện ích.</li>
                <li>• Nút kêu gọi hành động rõ ràng: xem phòng, liên hệ, đặt lịch.</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-sm">
              <h3 className="text-2xl font-semibold">CTA đề xuất</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                “Đặt lịch xem phòng hôm nay để chọn được chỗ ở phù hợp trước khi hết phòng.”
              </p>
              <button className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">
                Liên hệ ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
