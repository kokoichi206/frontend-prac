import React, { useState, useEffect } from "react";

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  EN = "en-US",
  JA = "ja-JP",
}

const getLocaleFromString = (locale: string): Locale => {
  switch (locale) {
    case Locale.EN:
      return Locale.EN;
    case Locale.JA:
      return Locale.JA;
    default:
      return Locale.EN;
  }
};

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState(Locale.EN);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, UPDATE_CYCLE);

    // クリーンアップ関数を返す！！！
    // バグやメモリリークを防ぐために、クリーンアップ関数を返すことが重要！！！
    return () => {
      clearInterval(timerId);
    };
    // 初期描画時のみ実行したいので、第2引数に空配列を渡す。
  }, []);

  useEffect(() => {
    const localeString = localStorage.getItem(KEY_LOCALE);
    if (localeString) {
      setLocale(getLocaleFromString(localeString));
    }
  }, []);

  // locale が変更されたら、ローカルストレージに保存する。
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{date.toLocaleString(locale)}</span>
        <select
          id="select"
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
};
