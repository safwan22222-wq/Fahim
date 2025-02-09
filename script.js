function showBenefits(product) {
    let benefitsText = "";

    if (product === "Brightening") {
        benefitsText = "Aloe Vera + Goat Milk Soap: ব্রাইটেনিং: ত্বকের উজ্জ্বলতা বৃদ্ধি করে।\n অ্যান্টি-এজিং: বয়সের ছাপ কমায়।\n রিপেয়ারিং: ত্বকের ক্ষতিগ্রস্ত কোষ পুনরুদ্ধার করে।\n ময়েশ্চারাইজিং: ত্বক আর্দ্র ও মসৃণ রাখে।";
    } else if (product === "Bright") {
        benefitsText = "Vegetable Cream: ঝুলে যাওয়া ত্বককে স্বাভাবিক করে।\nচোখের নিচের বলিরেখার কালো দাগ দূর করে।\nলোমকূপ পরিষ্কার করে।\nঅ্যান্টিসেপ্টিক ও অ্যান্টিব্যাকটেরিয়াল উপাদান বৃদ্বমান।\nত্বকের ফাটা দাগ দূর করে।\nত্বকের রোদেপোড়া ভাব দূর করে।\nরুক্ষ ও খসখসে ত্বক মসৃণ করে।\nত্বকের পুষ্টি যোগায়।";
    } else if (product === "tulsi") {
        benefitsText = "Neem + Tulsi Soap: ✔ কিটকনাজল, নিম, তুলসী ও টি ট্রি অয়েলের অনন্য সংমিশ্রণ\n✔ ত্বকের পুষ্টি জোগায় ও ময়েশ্চারাইজিং করে\n✔ ব্রণ, ফুসকুড়ি ও ফাংগাল সংক্রমণ প্রতিরোধে সহায়ক\n✔ জীবাণু ও ব্যাকটেরিয়া থেকে সুরক্ষা দেয়\n✔ ত্বক পরিষ্কার ও সতেজ রাখে";
    } else if (product === "alergy") {
        benefitsText = "Neem Cure: চুলকানি, খোঁস প্যাচরা, পিও প্রসমক ও রক্ত পরিশোধক।";
    }

    document.getElementById("benefit-text").innerText = benefitsText;
    document.getElementById("benefits").classList.remove("hidden");
}

function hideBenefits() {
    document.getElementById("benefits").classList.add("hidden");
}