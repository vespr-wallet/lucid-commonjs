import type * as Core from "./libs/cardano_multiplatform_lib/cardano_multiplatform_lib.generated.js";
import type * as Msg from "./libs/cardano_message_signing/cardano_message_signing.generated.js";
// import * as CWeb from "./wasm_modules/cardano_multiplatform_lib_web/cardano_multiplatform_lib.js";
// import * as MWeb from "./wasm_modules/cardano_message_signing_web/cardano_message_signing.js";
import * as CNode from "./libs/cardano_multiplatform_lib/cardano_multiplatform_lib.generated.js";
import * as MNode from "./libs/cardano_message_signing/cardano_message_signing.generated.js";

export { Core };

export const C: typeof Core = CNode as unknown as typeof Core;

export const M: typeof Msg = MNode as unknown as typeof Msg;

// import * as C from "./libs/cardano_multiplatform_lib/cardano_multiplatform_lib.generated.js";
// import * as M from "./libs/cardano_message_signing/cardano_message_signing.generated.js";
// import packageJson from "../../package.json" assert { type: "json" };

// async function unsafeInstantiate(module: any, url: string) {
//   try {
//     await module.instantiate({
//       // Exception for Deno fresh framework
//       url: new URL(
//         url,
//         `https://deno.land/x/lucid@${packageJson.version}/src/core/libs/`,
//       ),
//     });
//   } catch (_e) {
//     // This only ever happens during SSR rendering
//   }
// }

// await Promise.all([
//   unsafeInstantiate(
//     C,
//     `cardano_multiplatform_lib/cardano_multiplatform_lib_bg.wasm`,
//   ),
//   unsafeInstantiate(
//     M,
//     `cardano_message_signing/cardano_message_signing_bg.wasm`,
//   ),
// ]);

// export { C, M };
