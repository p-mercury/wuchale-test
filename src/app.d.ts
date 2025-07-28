import type { Logger } from "@aws-lambda-powertools/logger";
import type { Tracer } from "@aws-lambda-powertools/tracer";

declare global {
	namespace App {
		interface Locals {
			tracer: Tracer;
			logger: Logger;
		}
	}
}

export {};
