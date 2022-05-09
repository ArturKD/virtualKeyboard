export function shiftSymbols(currentLanguage, symbols, digits) {
  const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
  const [
    backquote,
    minus,
    equal,
    bracketleft,
    bracketright,
    backslash,
    semicolon,
    quote,
    comma,
    period,
    slash,
  ] = symbols;
  if (currentLanguage === "en") {
    one.textContent = "!";
    two.textContent = "@";
    three.textContent = "#";
    four.textContent = "$";
    five.textContent = "%";
    six.textContent = "^";
    seven.textContent = "&";
    eight.textContent = "*";
    nine.textContent = "(";
    zero.textContent = ")";
    backquote.textContent = "~";
    minus.textContent = "_";
    equal.textContent = "+";
    bracketleft.textContent = "{";
    bracketright.textContent = "}";
    backslash.textContent = "|";
    semicolon.textContent = ":";
    quote.textContent = '"';
    comma.textContent = "<";
    period.textContent = ">";
    slash.textContent = "?";
  } else if (currentLanguage === "ru") {
    one.textContent = "!";
    two.textContent = '"';
    three.textContent = "№";
    four.textContent = ";";
    five.textContent = "%";
    six.textContent = ":";
    seven.textContent = "?";
    eight.textContent = "*";
    nine.textContent = "(";
    zero.textContent = ")";
    minus.textContent = "_";
    equal.textContent = "+";
    backslash.textContent = "/";
    slash.textContent = ",";
  }
}

export function unshiftSymbols(currentLanguage, symbols, digits) {
  const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
  const [
    backquote,
    minus,
    equal,
    bracketleft,
    bracketright,
    backslash,
    semicolon,
    quote,
    comma,
    period,
    slash,
  ] = symbols;
  one.textContent = "1";
  two.textContent = "2";
  three.textContent = "3";
  four.textContent = "4";
  five.textContent = "5";
  six.textContent = "6";
  seven.textContent = "7";
  eight.textContent = "8";
  nine.textContent = "9";
  zero.textContent = "0";
  minus.textContent = "-";
  equal.textContent = "=";
  if (currentLanguage === "en") {
    backquote.textContent = "`";
    bracketleft.textContent = "[";
    bracketright.textContent = "]";
    backslash.textContent = "\\";
    semicolon.textContent = ";";
    quote.textContent = "'";
    comma.textContent = ",";
    period.textContent = ".";
    slash.textContent = "/";
  } else if (currentLanguage === "ru") {
    backslash.textContent = "\\";
    slash.textContent = ".";
  }
}
