import MyPaymentProviderService from "../my-payment";
import { ModuleProvider, Modules } from "@medusajs/framework/utils";

export default ModuleProvider(Modules.PAYMENT, {
  services: [MyPaymentProviderService],
});
