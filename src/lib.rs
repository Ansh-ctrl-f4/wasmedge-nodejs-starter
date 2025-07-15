use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn reverse_string(s: &str) -> String {
    println!("The Rust function reverse_string() received: {}", s);
    let reversed: String = s.chars().rev().collect();
    reversed
}
