export function showKeyboard() {
  const keyboard = `<div class="wrapper">
                        <div class="information">
                            <p>Клавиатура создана в операционной системе Windows</p>
                            <p>Для переключения языка комбинация: левыe ctrl + alt</p>
                        </div>
                        <textarea name="textarea" class="textarea" autofocus></textarea>
                        <div class="keyboard">
                            <div class="row">
                                <div class="key letter symbol" data-i18="backquote" id='Backquote'>\`</div>
                                <div class="key digit" id="Digit1">1</div>
                                <div class="key digit" id="Digit2">2</div>
                                <div class="key digit" id="Digit3">3</div>
                                <div class="key digit" id="Digit4">4</div>
                                <div class="key digit" id="Digit5">5</div>
                                <div class="key digit" id="Digit6">6</div>
                                <div class="key digit" id="Digit7">7</div>
                                <div class="key digit" id="Digit8">8</div>
                                <div class="key digit" id="Digit9">9</div>
                                <div class="key digit" id="Digit0">0</div>
                                <div class="key symbol" id="Minus">-</div>
                                <div class="key symbol" id="Equal">=</div>
                                <div class="key control-key big_key backspace" id="Backspace">Backspace</div>
                            </div>
                            <div class="row">
                                <div class="key control-key tab" id="Tab">Tab</div>
                                <div class="key letter" data-i18="q" id="KeyQ"></div>
                                <div class="key letter" data-i18="w" id="KeyW"></div>
                                <div class="key letter" data-i18="e" id="KeyE"></div>
                                <div class="key letter" data-i18="r" id="KeyR"></div>
                                <div class="key letter" data-i18="t" id="KeyT"></div>
                                <div class="key letter" data-i18="y" id="KeyY"></div>
                                <div class="key letter" data-i18="u" id="KeyU"></div>
                                <div class="key letter" data-i18="i" id="KeyI"></div>
                                <div class="key letter" data-i18="o" id="KeyO"></div>
                                <div class="key letter" data-i18="p" id="KeyP"></div>
                                <div class="key letter symbol" data-i18="[" id="BracketLeft">[</div>
                                <div class="key letter symbol" data-i18="]" id="BracketRight">]</div>
                                <div class="key symbol" id="Backslash">\\</div>
                                <div class="key control-key del" id="Delete">Del</div>
                            </div>
                            <div class="row">
                                <div class="key control-key big_key capslock" id="CapsLock">Caps lock</div>
                                <div class="key letter" data-i18="a" id="KeyA"></div>
                                <div class="key letter" data-i18="s" id="KeyS"></div>
                                <div class="key letter" data-i18="d" id="KeyD"></div>
                                <div class="key letter" data-i18="f" id="KeyF"></div>
                                <div class="key letter" data-i18="g" id="KeyG"></div>
                                <div class="key letter" data-i18="h" id="KeyH"></div>
                                <div class="key letter" data-i18="j" id="KeyJ"></div>
                                <div class="key letter" data-i18="k" id="KeyK"></div>
                                <div class="key letter" data-i18="l" id="KeyL"></div>
                                <div class="key letter symbol" data-i18=";" id="Semicolon"></div>
                                <div class="key letter symbol" data-i18="quotes" id="Quote"></div>
                                <div class="key control-key big_key enter" id="Enter">Enter</div>
                            </div>
                            <div class="row">
                                <div class="key control-key big_key shift" id="ShiftLeft">Shift</div>
                                <div class="key letter" data-i18="z" id="KeyZ"></div>
                                <div class="key letter" data-i18="x" id="KeyX"></div>
                                <div class="key letter" data-i18="c" id="KeyC"></div>
                                <div class="key letter" data-i18="v" id="KeyV"></div>
                                <div class="key letter" data-i18="b" id="KeyB"></div>
                                <div class="key letter" data-i18="n" id="KeyN"></div>
                                <div class="key letter" data-i18="m" id="KeyM"></div>
                                <div class="key letter symbol" data-i18="comma" id="Comma"></div>
                                <div class="key letter symbol" data-i18="period" id="Period"></div>
                                <div class="key symbol" data-i18="slash" id="Slash">/</div>
                                <div class="key control-key arrow-up arrow" id="ArrowUp">▲</div>
                                <div class="key control-key big_key shift" id="ShiftRight">Shift</div>
                            </div>
                            <div class="row">
                                <div class="key control-key" id="ControlLeft">Ctrl</div>
                                <div class="key control-key" id="MetaLeft">Win</div>
                                <div class="key control-key" id="AltLeft">Alt</div>
                                <div class="key space" id="Space"> </div>
                                <div class="key control-key" id="AltRight">Alt</div>
                                <div class="key control-key arrow" id="ArrowLeft">◄</div>
                                <div class="key control-key arrow" id="ArrowDown">▼</div>
                                <div class="key control-key arrow" id="ArrowRight">►</div>
                                <div class="key control-key" id="ControlRight">Ctrl</div>
                            </div>
                        </div>
                    </div>`;
  return keyboard;
}
