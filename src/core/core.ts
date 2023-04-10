import "./libs/cardano_multiplatform_lib/cardano_multiplatform_lib.generated.js";
import "./libs/cardano_message_signing/cardano_message_signing.generated.js";
import "./libs/cardano_multiplatform_lib/nodejs/cardano_multiplatform_lib.generated.js";
import "./libs/cardano_message_signing/nodejs/cardano_message_signing.generated.js";

import type * as Core from "./libs/cardano_multiplatform_lib/cardano_multiplatform_lib.generated.js";
import type * as Msg from "./libs/cardano_message_signing/cardano_message_signing.generated.js";
// import * as CWeb from "./wasm_modules/cardano_multiplatform_lib_web/cardano_multiplatform_lib.js";
// import * as MWeb from "./wasm_modules/cardano_message_signing_web/cardano_message_signing.js";
import * as CNode from "./libs/cardano_multiplatform_lib/nodejs/cardano_multiplatform_lib.generated.js";
import * as MNode from "./libs/cardano_message_signing/nodejs/cardano_message_signing.generated.js";

export { Core };

// import * as C from "./libs/cardano_multiplatform_lib/cardano_multiplatform_lib.generated.js";
// import * as M from "./libs/cardano_message_signing/cardano_message_signing.generated.js";
// import packageJson from "../../package.json" assert { type: "json" };

const C: typeof Core = CNode as unknown as typeof Core;

const M: typeof Msg = MNode as unknown as typeof Msg;

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

// export const instantiate = Promise.all([
//   unsafeInstantiate(
//     C,
//     `cardano_multiplatform_lib/cardano_multiplatform_lib_bg.wasm`,
//   ),
//   unsafeInstantiate(
//     M,
//     `cardano_message_signing/cardano_message_signing_bg.wasm`,
//   ),
// ]);

export { C, M };
