
export default function healthMonitor(level) {
    if (level.health > 50) {
        return "healthy";
    } if (level.health <= 50 && level.health > 15) {
        return "wounded";
    } if (level.health > 0 && level.health < 15) {
        return "critical";
    }
}
